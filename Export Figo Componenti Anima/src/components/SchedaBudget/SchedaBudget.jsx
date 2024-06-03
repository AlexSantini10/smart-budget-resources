/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SchedaBudget = ({
  rispettato,
  budgetNonSpeso = "/img/budget-non-speso.svg",
  budgetSpeso = "/img/budget-speso.svg",
}) => {
  return (
    <div className="scheda-budget">
      <div className={`doughnut ${rispettato}`}>
        {rispettato === "si" && (
          <div className="overlap-group-2">
            <img className="budget-non-speso" alt="Budget non speso" src={budgetNonSpeso} />
            <img className="budget-speso" alt="Budget speso" src={budgetSpeso} />
            <div className="text-wrapper-8">33%</div>
            <div className="text-wrapper-9">speso</div>
          </div>
        )}

        {rispettato === "no" && (
          <>
            <div className="text-wrapper-10">100%</div>
            <div className="text-wrapper-11">speso</div>
          </>
        )}
      </div>
      <div className="text-wrapper-12">Scade il 25/12/2024</div>
      <div className={`frame rispettato-${rispettato}`}>
        <div className="saldo">500 / 1500</div>
        <div className="text-wrapper-13">€</div>
      </div>
      <div className="text-wrapper-14">Spese domestiche</div>
    </div>
  );
};

SchedaBudget.propTypes = {
  rispettato: PropTypes.oneOf(["no", "si"]),
  budgetNonSpeso: PropTypes.string,
  budgetSpeso: PropTypes.string,
};
