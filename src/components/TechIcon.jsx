import React from 'react';

const TechIcon = ({pathsToImg, width = 30, height = 30, titleText}) => {
  return (
    <li className="portfolio__icons-item">
      <img
        title={titleText}
        src={pathsToImg}
        alt=""
        width={width} height={height} loading="lazy"
      />
    </li>
  );
};

export default TechIcon;