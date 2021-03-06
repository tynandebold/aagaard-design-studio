import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, darkTheme, errorPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={`content-wrapper ${
          darkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <Header siteTitle={data.site.siteMetadata.title} dark={darkTheme} />
        <>
          {errorPage ? (
            <main className="error-page">{children}</main>
          ) : (
            <main>{children}</main>
          )}
        </>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
