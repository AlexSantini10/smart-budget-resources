/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Categoria = ({ className }) => {
  return (
    <div className={`categoria ${className}`}>
      <div className="text-wrapper-32">Cibo (3)</div>
      <img className="mdi-pencil-outline-2" alt="Mdi pencil outline" src="/img/mdi-pencil-outline.svg" />
      <div className="img-wrapper">
        <img className="trash-2" alt="Trash" src="/img/trash-1.png" />
      </div>
      <p className="p">Spesa, Mangiare fuori, Cene di...</p>
    </div>
  );
};
