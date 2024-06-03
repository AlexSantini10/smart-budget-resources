/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SottoCategoria = ({ className }) => {
  return (
    <div className={`sotto-categoria ${className}`}>
      <div className="text-wrapper-15">Spesa</div>
      <img className="mdi-pencil-outline" alt="Mdi pencil outline" src="/img/mdi-pencil-outline-1.svg" />
      <div className="trash-wrapper">
        <img className="trash" alt="Trash" src="/img/trash-1.png" />
      </div>
    </div>
  );
};
