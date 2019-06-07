import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"

import flux from "../images/01.logo_flux.png"
import libratone from "../images/02.case_dinadona.png"
import k30 from "../images/03.case_K30-2.png"

const asdf = [
  {
    _id: 0,
    name: "Flux, website",
    image: flux,
  },
  {
    _id: 1,
    name: "Libratone, website",
    image: libratone,
  },
  {
    _id: 2,
    name: "K30, website",
    image: k30,
  },
]

const IndexPage = () => {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  const [projects, setProjects] = useState([])

  const changeImage = () => {
    setIndex(state => (state + 1) % asdf.length)
  }

  useEffect(() => {
    setLoading(true)

    fetch(`http://localhost:3000/api/projects`)
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects)
        setLoading(false)
      })
  }, [])

  const transitions = useTransition(asdf, project => project._id, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: config.default,
  })

  return (
    <Layout darkTheme={true}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section className="left">
        <Nav
          page="home"
          projectTitle={projects.length ? projects[index].title : ""}
        />
      </section>
      <section className="right">
        {projects.length && (
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
      </section>
    </Layout>
  )
}

export default IndexPage
