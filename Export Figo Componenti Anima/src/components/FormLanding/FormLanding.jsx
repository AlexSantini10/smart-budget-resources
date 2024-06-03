/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TextInput } from "../TextInput";
import "./style.css";

export const FormLanding = ({ className }) => {
  return (
    <div className={`form-landing ${className}`}>
      <p className="text-wrapper-46">Crea un account per iniziare</p>
      <div className="input-nome">
        <div className="overlap-group-9">
          <div className="accedi-button-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-47">Nome</div>
        </div>
      </div>
      <div className="input-cognome">
        <div className="overlap-7">
          <div className="accedi-button-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper-48">Cognome</div>
        </div>
      </div>
      <TextInput className="text-input-instance" />
      <div className="input-password">
        <div className="overlap-8">
          <div className="accedi-button-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-49">Password</div>
        </div>
      </div>
      <div className="pulsante">
        <div className="overlap-9">
          <div className="text-wrapper-50">Crea Account</div>
        </div>
      </div>
    </div>
  );
};
