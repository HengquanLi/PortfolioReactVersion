import React from 'react'

export default function PortfolioContent(props) {
  const { name, url, imgSrc } = props;
  console.log(props);
  return (
    <div className="card display">
      <div className="box">
        <a href={url} target="blank">
          <img src={imgSrc} alt="work day scheduler" />
          <div className="name">{name}</div>
        </a>
      </div>
    </div>
  )
}
