import React from "react"
import NavLinks from '@components/navLinks'
import { Logo } from '@images/icons'

const Footer = () => (
  <footer className="bg-dark footer">
    <div className="wrapper footer__inner">
      
      <Logo />

      <div className="footer__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati vitae consectetur.</p>

        <nav className="footer__nav">
          <NavLinks specialClass='footer__nav-list' />
        </nav>

      </div>

    </div>
  </footer>
)

export default Footer
