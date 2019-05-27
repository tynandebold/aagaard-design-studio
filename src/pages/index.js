import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"

import flux from "../images/01.logo_flux.png"
import libratone from "../images/02.case_dinadona.png"
import k30 from "../images/03.case_K30-2.png"

const projects = [
  {
    id: 0,
    name: "Flux, website",
    url: flux,
  },
  {
    id: 1,
    name: "Libratone, website",
    url: libratone,
  },
  {
    id: 2,
    name: "K30, website",
    url: k30,
  },
]

const IndexPage = () => {
  const [index, setIndex] = useState(0)

  const transitions = useTransition(projects[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
  })

  const changeImage = () => {
    setIndex(state => (state + 1) % projects.length)
  }

  return (
    <Layout darkTheme={true}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section className="left">
        <Nav page="home" projectTitle={projects[index].name} />
      </section>
      <section className="right">
        <div className="img-wrapper">
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              className="img-container"
              onClick={changeImage}
              style={{ ...props, backgroundImage: `url(${item.url})` }}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
