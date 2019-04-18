import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout darkTheme={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/" activeStyle={{ color: "white" }}>
      Work
    </Link>
    <Link to="/page-2/" style={{ color: "#ffffff", opacity: 0.4 }}>
      Info
    </Link>
  </Layout>
)

export default IndexPage
