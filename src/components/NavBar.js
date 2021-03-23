import * as React from "react"
import { Link } from "gatsby"

const NavBar = () => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">Julio Rojas</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About Me</Link>
          <Link to="/about">Projects</Link>
          <Link to="/about">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default NavBar
