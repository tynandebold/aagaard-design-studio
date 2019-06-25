import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [projects, setProjects] = useState([""])
  const [from, setFrom] = useState(100)
  const [leave, setLeave] = useState(-50)

  useEffect(() => {
    const lastVisited = localStorage.getItem("ads-timestamp")
    setLoading(true)

    if (lessThan12HoursAgo(lastVisited)) {
      useLocalData()
      return
    }

    fetch(`https://aagaard-design-studio-admin.herokuapp.com/api/projects`)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.projects.sort((a, b) => +a.order - +b.order)
        setProjects(sortedData)
        setLoading(false)

        localStorage.setItem("ads-timestamp", Date.now())
        localStorage.setItem("ads-data", JSON.stringify(sortedData))
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const useLocalData = () => {
    const data = localStorage.getItem("ads-data")

    setProjects(JSON.parse(data))
    setLoading(false)
  }

  const lessThan12HoursAgo = date => {
    const lengthOfTime = 12 * 60 * 60 * 1000 // 12 hours
    const timeAgo = Date.now() - lengthOfTime

    return date > timeAgo
  }

  const changeImage = direction => {
    if (direction === "right") {
      setIndex(index => (index + 1) % projects.length)
      setFrom(100)
      setLeave(-50)
    } else {
      if (index - 1 < 0) {
        setIndex(projects.length - 1)
      } else {
        setIndex(index - 1)
      }

      setFrom(-100)
      setLeave(50)
    }
  }

  const transitions = useTransition(projects[index], project => project._id, {
    from: { opacity: 0, transform: `translate3d(${from}%,0,0)` },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: `translate3d(${leave}%,0,0)` },
    config: config.default,
  })

  if (error) console.log(error)

  return (
    <Layout darkTheme={true}>
      <SEO title="home" />
      <section className="left">
        <Nav page="home" projectTitle={!loading ? projects[index].title : ""} />
      </section>
      <section className="right">
        {!loading && !error && (
          <>
            <div
              className="toggle toggle--left"
              onClick={() => changeImage("left")}
            />
            <div
              className="toggle toggle--right"
              onClick={() => changeImage("right")}
            />
            <div className="img-wrapper">
              {projects[index].image &&
                transitions.map(({ item, props, key }) => (
                  <animated.div
                    key={key}
                    className="img-container"
                    style={{ ...props, backgroundImage: `url(${item.image})` }}
                  />
                ))}
            </div>
          </>
        )}
        {error && (
          <p style={{ color: "#fff" }}>
            An error occurred. Please try again later.
          </p>
        )}
      </section>
    </Layout>
  )
}

export default IndexPage
