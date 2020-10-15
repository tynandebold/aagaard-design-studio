import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "flickity/dist/flickity.css"

import Layout from "../components/layout"
import Loading from "../components/loading"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null

const IndexPage = () => {
  const { allContentfulProject: data } = useStaticQuery(graphql`
    {
      allContentfulProject(sort: { fields: order, order: ASC }) {
        edges {
          node {
            title
            order
            media {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const [index, setIndex] = useState(0)
  const [interval, setInterval] = useState(375)
  const [loading, setLoading] = useState(true)
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < 800
        ? true
        : false
      : null
  const wasLoaded =
    typeof window !== "undefined" ? sessionStorage.getItem("ads-loaded") : null

  useEffect(() => {
    setLoading(true)

    if (wasLoaded) {
      setLoading(false)
      setInterval(0)
    } else {
      setTimeout(() => {
        setLoading(false)
        setInterval(0)
        sessionStorage.setItem("ads-loaded", true)
      }, 3200)
    }
  }, [])

  return (
    <Layout darkTheme={true}>
      <SEO title="work" />
      <section className="left">
        <Nav page="work" projectTitle={data.edges[index].node.title || ""} />
      </section>
      <section className="right">
        <div className="img-wrapper">
          <Flickity
            flickityRef={c => {
              c.on("change", () => setIndex(c.selectedIndex))
            }}
            options={{
              autoPlay: isMobile ? 2250 : false,
              friction: isMobile ? 0.35 : 0.5,
              fullscreen: true,
              imagesLoaded: true,
              pageDots: false,
              selectedAttraction: isMobile ? 0.05 : 0.08,
              setGallerySize: false,
              wrapAround: true,
            }}
          >
            {data.edges.map(({ node }, index) => (
              <div
                className="img-container"
                key={index}
                style={{ backgroundImage: `url(${node.media.file.url})` }}
              />
            ))}
          </Flickity>
        </div>
        {data.edges.length === 0 && (
          <p style={{ color: "#f2f1f0" }}>
            An error occurred. Please try again later.
          </p>
        )}
      </section>
      {!wasLoaded && (
        <Loading
          class={loading ? "show" : "hide"}
          interval={interval}
          text="Loading"
        />
      )}
    </Layout>
  )
}

export default IndexPage
