import React from 'react'

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio-content">
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/WorkDayScheduler/" target="blank">
                <img src="./Assets/images/scheduler.png" alt="work day scheduler" />
                <div className="name"> Day scheduler</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/WeatherDashboard/" target="blank">
                <img src="./Assets/images/weather.png" alt="weather dashboard" />
                <div className="name">Weather forecast</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/Public-Holiday-Checker/" target="blank">
                <img src="./Assets/images/holiday.png" alt="holiday checker" />
                <div className="name">Holiday checker</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/TeamProfileGenerator" target="blank">
                <img src="./Assets/images/team.png" alt="team Generator" />
                <div className="name">Team Generator</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/EployeeManagementSystem" target="blank">
                <img src="./Assets/images/employeeManagement.png" alt="Employee Management" />
                <div className="name">Employee Management</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/Burger" target="blank">
                <img src="./Assets/images/burger.png" alt="Burgers' Burger" />
                <div className="name">Burgers' Burger</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
