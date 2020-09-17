import React, { useState } from "react"
import { Link } from "gatsby"

import { Hamburger, Times, Logo } from '../images/icons'

const Header = () => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <header className="header">
      <div className="wrapper header__nav-container">
  
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
  
        <button 
          id="nav-toggle"
          onClick={() => toggleNav(!isOpen)}
        >
          <span className={!isOpen ? 'show' : ''}>
            <Hamburger />
          </span>

          <span className={isOpen ? 'show' : ''}>
            <Times />
          </span>
        </button>
  
        <nav className={isOpen ? 'header__nav open' : 'header__nav'}>
          <ul className="header__nav-list">
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
    </header>
  )
}

export default Header
