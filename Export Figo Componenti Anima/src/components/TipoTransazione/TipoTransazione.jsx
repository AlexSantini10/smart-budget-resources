/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TipoTransazione = ({ entrata, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    entrata: entrata || false,
  });

  return (
    <div
      className={`tipo-transazione ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`uscita entrata-${state.entrata}`}>
        {!state.entrata && <>uscita</>}

        {state.entrata && <>&nbsp;&nbsp;entrata</>}
      </div>
      <img
        className={`icon entrata-0-${state.entrata}`}
        alt="Icon"
        src={state.entrata ? "/img/icon-1.png" : "/img/icon.png"}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.entrata === false) {
    switch (action) {
      case "click":
        return {
          entrata: true,
        };
    }
  }

  if (state.entrata === true) {
    switch (action) {
      case "click":
        return {
          entrata: false,
        };
    }
  }

  return state;
}

TipoTransazione.propTypes = {
  entrata: PropTypes.bool,
};
