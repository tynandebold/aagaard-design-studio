import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, dark }) => (
  <header style={{}}>
    <div style={{}}>
      <h1 style={{ fontSize: `1rem`, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: dark ? `#f2f1f0` : `#0d0d0d`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
