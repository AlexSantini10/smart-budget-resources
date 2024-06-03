/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DebitoCredito = ({ tipo, className }) => {
  return (
    <div className={`debito-credito ${tipo} ${className}`}>
      {tipo === "credito" && (
        <div className="overlap-6">
          <div className="text-wrapper-26">Regalo di Mauro</div>
          <div className="saldo-4">
            <div className="overlap-group-5">
              <div className="element-2">-10.00</div>
              <div className="text-wrapper-27">€</div>
            </div>
          </div>
          <div className="background" />
          <div className="text-wrapper-28">Sushi</div>
          <div className="saldo-5">
            <div className="overlap-group-5">
              <div className="element-3">+21.00</div>
              <div className="text-wrapper-27">€</div>
            </div>
          </div>
          <p className="antonio-ti-deve">
            <span className="span">Antonio</span>
            <span className="text-wrapper-29"> ti deve</span>
          </p>
        </div>
      )}

      {tipo === "debito" && (
        <>
          <div className="text-wrapper-30">Regalo di Mauro</div>
          <div className="saldo-6">
            <div className="overlap-group-5">
              <div className="element-2">-10.00</div>
              <div className="text-wrapper-27">€</div>
            </div>
          </div>
          <p className="devi-a-antonio">
            <span className="text-wrapper-29">Devi a </span>
            <span className="text-wrapper-31">Antonio</span>
          </p>
        </>
      )}
    </div>
  );
};

DebitoCredito.propTypes = {
  tipo: PropTypes.oneOf(["debito", "credito"]),
};
