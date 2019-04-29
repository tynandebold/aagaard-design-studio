import React from "react"
import { Link } from "gatsby"

const Nav = ({page}) => (
  <nav>
    {page === 'home' ? (
      <>
        <Link to="/" activeStyle={{ color: "white", marginRight: '1rem' }}>Work</Link>
        <Link to="/about/" style={{ color: "#ffffff", opacity: 0.4 }}>Info</Link>
      </>
    ) : (
      <>
        <Link to="/" style={{ color: "#0d0d0d", opacity: 0.4, marginRight: '1rem' }}> Work </Link>
        <Link to="/about/" activeStyle={{ color: "#0d0d0d" }}>Info</Link>
        <a style={{ color: "#0d0d0d", opacity: 0.4, marginLeft: 'auto' }}>Contact</a>
      </>
    )}
  </nav>
)

export default Nav