import React from "react"
import { Link } from "gatsby"

import Contact from "../components/contact"

const Nav = ({ page }) => (
  <nav>
    {page === "home" ? (
      <>
        <Link to="/" activeStyle={{ color: "white", marginRight: "1.3333rem" }}>
          Work
        </Link>
        <Link to="/about/" style={{ color: "#ffffff", opacity: 0.4 }}>
          Info
        </Link>
      </>
    ) : (
      <>
        <Link
          to="/"
          style={{ color: "#0d0d0d", opacity: 0.4, marginRight: "1.3333rem" }}
        >
          {" "}
          Work{" "}
        </Link>
        <Link to="/about/" activeStyle={{ color: "#0d0d0d" }}>
          Info
        </Link>
        <Contact />
      </>
    )}
  </nav>
)

export default Nav
