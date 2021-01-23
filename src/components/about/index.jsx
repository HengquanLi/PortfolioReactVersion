import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="left column">
            <img src="./Assets/images/about.jpg" alt="" />
          </div>
          <div className="right column">
            <div className="text">I am Hengquan Li</div>
            <p>Currently, I am working as a barista.</p>
            <p>I can make good coffee, and coffee arts.</p>
            <p>Also I have been a coffee shop manager for five years.</p>
            <p>Be a software developer is my dreaming job.</p>
            <p>So, I made a decition to study web development, to give myself a chance to change career.</p>
            <p>Now, I am a Full Stack Development student of UWA bootcamp, using my after hours to build up the
                        technologies.</p>
            <p>It is not easy, but I am enjoy it!!</p>
            <div className="download-btn">
              <a href="./Assets/Resume-Hengquan-Li.pdf" target="blank">My resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
