import React from "react"
import { Link } from "gatsby"

import Contact from "../components/contact"

const Nav = ({ page, projectTitle }) => (
  <nav>
    {page === "home" ? (
      <>
        <Link to="/" activeStyle={{ color: "#fff", marginRight: "1.3333rem" }}>
          Work
        </Link>
        <Link to="/about/" style={{ color: "#fff", opacity: 0.4 }}>
          Info
        </Link>
        <div className="project-title">{projectTitle}</div>
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
