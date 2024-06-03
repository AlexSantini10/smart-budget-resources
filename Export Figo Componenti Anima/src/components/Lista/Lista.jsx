/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Transaction } from "../Transaction";
import "./style.css";

export const Lista = ({ className }) => {
  return (
    <div className={`lista ${className}`}>
      <Transaction className="transaction-instance" />
      <div className="element">
        <div className="overlap-3">
          <div className="text-wrapper-22">Sushi</div>
          <div className="div-wrapper">
            <div className="overlap-group-4">
              <div className="text-wrapper-23">-20.00</div>
              <div className="text-wrapper-24">€</div>
            </div>
          </div>
        </div>
      </div>
      <div className="element">
        <div className="overlap-4">
          <div className="text-wrapper-22">Stipendio</div>
          <div className="saldo-2">
            <div className="overlap-group-4">
              <div className="text-wrapper-25">+1800.00</div>
              <div className="text-wrapper-24">€</div>
            </div>
          </div>
        </div>
      </div>
      <div className="element">
        <div className="overlap-4">
          <div className="text-wrapper-22">Abbonamento Palestra</div>
          <div className="saldo-2">
            <div className="overlap-group-4">
              <div className="text-wrapper-23">-50.00</div>
              <div className="text-wrapper-24">€</div>
            </div>
          </div>
        </div>
      </div>
      <div className="element">
        <div className="overlap-5">
          <div className="text-wrapper-22">Spesa</div>
          <div className="saldo-3">
            <div className="overlap-group-4">
              <div className="text-wrapper-23">-48.71</div>
              <div className="text-wrapper-24">€</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <div className="text-wrapper-22">Sushi</div>
          <div className="div-wrapper">
            <div className="overlap-group-4">
              <div className="text-wrapper-23">-20.00</div>
              <div className="text-wrapper-24">€</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
