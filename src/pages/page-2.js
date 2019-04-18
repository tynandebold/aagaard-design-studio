import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout darkTheme={false}>
    <SEO title="Page two" />
    <p>A Copenhagen–based, one-man army design studio. I design, advise & carry out purposeful solutions — as a brand strategist, futurist & self–taught designer. Currently working as a Senior Designer at Charlie Tango. I don’t believe in any certain process or methodology, nor religiously worship the latest set of buzzwords. I believe in simplicity, expertise, logic, effort, collaboration and trail n’ error — and above all I believe in 'whatever it f*cking takes'.</p>
    <p>Clients: Danske Bank, Lauritz.com, SAS, Libratone, Coloplast, Wilhelm Lauritz Arkitekter, Dinesen, YouSee, Virk, Borger, Storebælt AS, 3 Days of Design, Gether Conemporary, ABN Amro, Anker&co, Scalepoint + more.</p>
    <Link to="/" style={{ color: "#0d0d0d", opacity: 0.4 }}>
      Work
    </Link>
    <Link to="/page-2/" activeStyle={{ color: "#0d0d0d" }}>
      Info
    </Link>
  </Layout>
)

export default SecondPage
