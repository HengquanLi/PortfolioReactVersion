import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo"><a href="/">Portfo<span>lio.</span></a></div>
        <ul className="menu">
          <li>
            <a href="/home" className="menu-btn">Home</a>
          </li>
          <li>
            <a href="/about" className="menu-btn">About</a>
          </li>
          <li>
            <a href="/portfolio" className="menu-btn">Portfolio</a>
          </li>
          <li>
            <a href="/contact" className="menu-btn">Contact</a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}
