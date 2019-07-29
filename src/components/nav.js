import React from "react"
import { Link } from "gatsby"

import Contact from "../components/contact"

const Nav = ({ page, projectTitle }) => (
  <nav>
    {page === "home" ? (
      <>
        <Link
          className="nav-link--first"
          to="/"
          activeStyle={{ color: "#f2f1f0" }}
        >
          Work
        </Link>
        <Link to="/info/" style={{ color: "#f2f1f0", opacity: 0.4 }}>
          Info
        </Link>
        <div className="project-title">{projectTitle}</div>
      </>
    ) : (
      <>
        <Link
          className="nav-link--first"
          to="/"
          style={{ color: "#0d0d0d", opacity: 0.4 }}
        >
          {" "}
          Work{" "}
        </Link>
        <Link to="/info/" activeStyle={{ color: "#0d0d0d" }}>
          Info
        </Link>
        <Contact />
      </>
    )}
  </nav>
)

export default Nav
