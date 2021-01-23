import React from 'react'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-contant">
          <div className="left column">
            <div className="text">Get in touch</div>
            <p>
              If you are interested in something from this page or you want to know more about me.
                    </p>
            <p>
              Please feel free to contact me.
                    </p>
            <div className="icons">
              <div className="row">
                <i className="fa fa-user"></i>
                <div className="detail">
                  <div className="head">Name</div>
                  <div className="value">Hengquan Li</div>
                </div>

              </div>
              <div className="row">
                <i className="fa fa-mobile"></i>
                <div className="detail">
                  <div className="head">Mobile</div>
                  <div className="value">61-425879268</div>
                </div>

              </div>
              <div className="row">
                <i className="fa fa-envelope"></i>
                <div className="detail">
                  <div className="head">Email</div>
                  <div className="value"><a href="mailto:Hengquan.Li@outlook.com">Hengquan.Li@outlook.com</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fab fa-linkedin"></i>
                <div className="detail">
                  <div className="head">LinkedIn</div>
                  <div className="value"> <a href="https://www.linkedin.com/in/hengquan-li-60a7431b9/"
                    target="blank">linkedin.com/in/hengquan-li-60a7431b9</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right column">
            <div className="text">Message me</div>
            <form action="#">
              <div className="input">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input textarea">
                <textarea name="message" id="message" cols="30" rows="10"
                  placeholder="Message.."></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
