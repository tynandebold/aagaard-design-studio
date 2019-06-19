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

  const changeImage = () => {
    setIndex(state => (state + 1) % projects.length)
  }

  useEffect(() => {
    setLoading(true)

    fetch(`http://localhost:3000/api/projects`)
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const transitions = useTransition(projects[index], project => project._id, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: config.default,
  })

  if (error) console.log(error)

  return (
    <Layout darkTheme={true}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section className="left">
        <Nav page="home" projectTitle={!loading ? projects[index].title : ""} />
      </section>
      <section className="right">
        {!loading && !error && (
          <div className="img-wrapper">
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                className="img-container"
                onClick={changeImage}
                style={{ ...props, backgroundImage: `url(${item.image})` }}
              />
            ))}
          </div>
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
