import React from 'react';
import Sheduler from './images/scheduler.png';
import Burger from './images/burger.png';
import EmployeeManagement from './images/employeeManagement.png';
import Holiday from './images/holiday.png';
import Team from './images/team.png';
import Weather from './images/weather.png';

import PortfolioContent from '../../components/portfolioContent';



export default function Portfolio() {

  const sheduler = {
    url: 'https://grandbearsleepy.github.io/WorkDayScheduler/',
    imgSrc: Sheduler,
    name: 'Day scheduler'
  }

  const holiday = {
    url: 'https://grandbearsleepy.github.io/Public-Holiday-Checker/',
    imgSrc: Holiday,
    name: 'Holiday checker'
  }

  const employeeManagement = {
    url: 'https://github.com/GrandBearSleepy/EployeeManagementSystem',
    imgSrc: EmployeeManagement,
    name: 'Employee Management'
  }

  const teamGenerator = {
    url: 'https://github.com/GrandBearSleepy/TeamProfileGenerator',
    imgSrc: Team,
    name: 'Team Generator'
  }

  const burger = {
    url: 'https://github.com/GrandBearSleepy/Burger',
    imgSrc: Burger,
    name: 'Burgers\' Burger'
  }

  const weather = {
    url: 'https://grandbearsleepy.github.io/WeatherDashboard/',
    imgSrc: Weather,
    name: 'Holiday checker'
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio-content">
          <PortfolioContent {...sheduler} />
          <PortfolioContent {...holiday} />
          <PortfolioContent {...employeeManagement} />
          <PortfolioContent {...weather} />
          <PortfolioContent {...burger} />
          <PortfolioContent {...teamGenerator} />
        </div>
      </div>
    </section>
  )
}
