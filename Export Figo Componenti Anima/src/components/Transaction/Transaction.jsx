/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Transaction = ({ className }) => {
  return (
    <div className={`transaction ${className}`}>
      <div className="overlap-2">
        <div className="text-wrapper-19">Spesa</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
            <div className="text-wrapper-20">-63.28</div>
            <div className="text-wrapper-21">€</div>
          </div>
        </div>
      </div>
    </div>
  );
};
