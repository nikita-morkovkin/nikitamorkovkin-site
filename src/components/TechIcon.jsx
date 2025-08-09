import React from 'react';
import {motion} from 'framer-motion';
import iconVariants from "./iconVariants.js";

const TechIcon = ({pathsToImg, width = 30, height = 30, titleText}) => {
  return (
    <motion.li
      initial={iconVariants.initial}
      whileHover={iconVariants.hover}
      transition={{
        duration: 0.3
      }}
      className="portfolio__icons-item"
    >
      <img
        title={titleText}
        src={pathsToImg}
        alt=""
        width={width}
        height={height}
        loading="lazy"
      />
    </motion.li>
  );
};

export default TechIcon;