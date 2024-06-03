/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  className,
  unionClassName,
  lineStroke = "/img/line-3-stroke.svg",
  img = "/img/line-2-stroke.svg",
  lineStroke1 = "/img/line-3-stroke.svg",
}) => {
  return (
    <div className={`header ${className}`}>
      <img className="img" alt="Profile image" src="/img/profile-image-1.png" />
      <div className="text-wrapper-6">SmartBudget</div>
      <div className="icon-more">
        <img className={`union ${unionClassName}`} alt="Union" src="/img/union.png" />
        <img className="line-stroke" alt="Line stroke" src={lineStroke} />
        <img className="line-stroke-2" alt="Line stroke" src={img} />
        <img className="line-stroke-3" alt="Line stroke" src={lineStroke1} />
      </div>
    </div>
  );
};

Header.propTypes = {
  lineStroke: PropTypes.string,
  img: PropTypes.string,
  lineStroke1: PropTypes.string,
};
