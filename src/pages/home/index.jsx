import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Hengquan Li</div>
          <div className="text-3">And I'm a <span>Full stack developer</span></div>
          <Link id="contact-btn" to='/contact'>Contact me</Link>
        </div>
      </div>
    </section>
  )
}
