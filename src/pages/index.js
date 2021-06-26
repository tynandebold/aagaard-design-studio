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

/* eslint-disable */
typeof window !== "undefined" ? require("flickity-fade") : () => null

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
            flickityRef={flkty => {
              flkty.on("change", () => setIndex(flkty.selectedIndex))
              flkty.on("staticClick", e => {
                const middle = e.srcElement.offsetWidth / 2
                const rightSideClick = e.x > middle ? true : false

                if (rightSideClick) {
                  flkty.next()
                } else {
                  flkty.previous()
                }
              })
            }}
            options={{
              accessibility: false,
              autoPlay: isMobile ? 2200 : false,
              bgLazyLoad: 2,
              draggable: true,
              fade: true,
              friction: 0.85,
              imagesLoaded: true,
              lazyLoad: 2,
              pageDots: false,
              resize: true,
              selectedAttraction: 0.3,
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
