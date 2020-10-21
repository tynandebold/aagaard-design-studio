import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const InfoPage = () => {
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
      <SEO title="info" />
      <section className="left">
        <Nav page="info" />
      </section>
      <section className="right">
        {documentToReactComponents(data.infoText.json, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <a
                className="info-link"
                href={node.data.uri}
                rel="noopener noreferrer"
                target="_blank"
              >
                {children}
              </a>
            ),
          },
        })}
        <p className="copyright">© 2012—2020</p>
      </section>
    </Layout>
  )
}

export default InfoPage
