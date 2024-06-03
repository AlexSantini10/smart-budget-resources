/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const EsempioStatistiche = ({ className }) => {
  return (
    <div className={`esempio-statistiche ${className}`}>
      <div className="pulsante-accesso">
        <div className="overlap-group-7">
          <div className="text-wrapper-45">Statistiche Conti</div>
        </div>
      </div>
      <img className="graph-example" alt="Graph example" src="/img/graph-example.png" />
    </div>
  );
};
