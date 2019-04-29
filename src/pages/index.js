import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => (
  <Layout darkTheme={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="left">
      <Nav page="home" />
    </section>
    <section className="right">
      <div className="img-wrapper">
        <div className="img-container" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
