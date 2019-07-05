import React, { useState, useEffect } from "react"
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
  const [error, setError] = useState(null)
  const [index, setIndex] = useState(0)
  const [interval, setInterval] = useState(375)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([{}])
  const [shouldAutoplay, setAutoplay] = useState(false)

  const flickityOptions = {
    autoPlay: shouldAutoplay,
    friction: 0.5,
    fullscreen: true,
    imagesLoaded: true,
    pageDots: false,
    selectedAttraction: 0.08,
    setGallerySize: false,
    wrapAround: true,
  }

  useEffect(() => {
    setLoading(true)

    if (window.innerWidth < 660) {
      setAutoplay(2250)
    }

    if (sessionStorage.getItem("ads-loaded")) {
      setLoading(false)
      setInterval(0)
    } else {
      setTimeout(() => {
        setLoading(false)
        setInterval(0)
        sessionStorage.setItem("ads-loaded", true)
      }, 3200)
    }

    const lastVisited = localStorage.getItem("ads-timestamp")

    if (lessThan12HoursAgo(lastVisited)) {
      useLocalData()
      return
    }

    fetch(`https://aagaard-design-studio-admin.herokuapp.com/api/projects`)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.projects.sort((a, b) => +a.order - +b.order)
        setProjects(sortedData)

        localStorage.setItem("ads-timestamp", Date.now())
        localStorage.setItem("ads-data", JSON.stringify(sortedData))
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  const useLocalData = () => {
    const data = localStorage.getItem("ads-data")

    setProjects(JSON.parse(data))
  }

  const lessThan12HoursAgo = date => {
    const lengthOfTime = 12 * 60 * 60 * 1000 // 12 hours
    const timeAgo = Date.now() - lengthOfTime

    return date > timeAgo
  }

  if (error) console.log(error)

  return (
    <Layout darkTheme={true}>
      <SEO title="home" />
      <section className="left">
        <Nav page="home" projectTitle={projects[index].title || ""} />
      </section>
      <section className="right">
        {!loading && !error && (
          <>
            <div className="img-wrapper">
              <Flickity
                flickityRef={c => {
                  c.on("change", () => setIndex(c.selectedIndex))
                }}
                options={flickityOptions}
              >
                {projects.map((project, index) => (
                  <div
                    className="img-container"
                    key={index}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                ))}
              </Flickity>
            </div>
          </>
        )}
        {error && (
          <p style={{ color: "#fff" }}>
            An error occurred. Please try again later.
          </p>
        )}
      </section>
      <Loading
        class={loading ? "show" : "hide"}
        interval={interval}
        text="Loading"
      />
    </Layout>
  )
}

export default IndexPage
