import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, dark }) => (
  <header style={{}}>
    <div style={{}}>
      <h1 style={{ fontSize: `18px`, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: dark ? `white` : `black`,
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
