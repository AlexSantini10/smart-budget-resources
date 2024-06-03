/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SaldoHomePage = ({ className }) => {
  return (
    <div className={`saldo-home-page ${className}`}>
      <div className="text-wrapper-39">5195,47</div>
      <div className="text-wrapper-40">€</div>
      <div className="text-wrapper-41">Il tuo saldo attuale:</div>
      <div className="text-wrapper-42">questo mese</div>
      <p className="element-4">
        <span className="text-wrapper-43">+234,07</span>
        <span className="text-wrapper-44">€</span>
      </p>
    </div>
  );
};
