import React from "react"
import { Link } from "gatsby"

const NavLinks = ({ specialClass }) => (
  <ul className={specialClass}>
    <li>
      <Link to="/">Page One</Link>
    </li>
    <li>
      <Link to="/">Page</Link>
    </li>
    <li>
      <Link to="/">Page</Link>
    </li>
    <li>
      <Link to="/">Page</Link>
    </li>
    <li>
      <Link to="/">Page</Link>
    </li>
  </ul>
)

export default NavLinks