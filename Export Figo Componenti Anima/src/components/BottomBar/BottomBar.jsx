/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BottomBar = ({ className }) => {
  return (
    <div className={`bottom-bar ${className}`}>
      <div className="tabs-wrapper">
        <div className="tabs">
          <div className="home-tab">
            <div className="text-wrapper-7">Torna alla Home</div>
            <div className="icon-home">
              <img className="subtract" alt="Subtract" src="/img/subtract-4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
