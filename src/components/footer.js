import React from "react"
import { Link } from "gatsby"

import { Logo } from '../images/icons'

const Footer = () => (
  <footer className="bg-dark footer">
    <div className="wrapper footer__inner">
      
      <Logo />

      <div className="footer__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati vitae consectetur.</p>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
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
            <li>
              <Link to="/">Page</Link>
            </li>
          </ul>
        </nav>

      </div>

    </div>
  </footer>
)

export default Footer
