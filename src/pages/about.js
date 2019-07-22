import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const AboutPage = () => {
  const { contentfulInfo: data } = useStaticQuery(graphql`
    {
      contentfulInfo {
        infoText {
          json
        }
      }
    }
  `)

  return (
    <Layout darkTheme={false}>
      <SEO title="about" />
      <section className="left">
        <Nav page="about" />
        {console.log(data)}
      </section>
      <section className="right">
        {documentToReactComponents(data.infoText.json, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <a
                className="info-link"
                href={node.data.uri}
                rel="noopener"
                target="_blank"
              >
                {children}
              </a>
            ),
          },
        })}
        <p className="date">26.06––2019</p>
      </section>
    </Layout>
  )
}

export default AboutPage
