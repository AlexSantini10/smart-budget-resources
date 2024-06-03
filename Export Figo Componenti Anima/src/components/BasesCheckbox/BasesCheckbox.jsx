/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BasesIconWrapper } from "../BasesIconWrapper";
import "./style.css";

export const BasesCheckbox = ({
  enabled,
  thumbClassName,
  basesIconWrapperColor = "/img/color-17.svg",
  basesIconWrapperColorClassName,
}) => {
  return (
    <div className="bases-checkbox">
      <div className={`thumb enabled-${enabled} ${thumbClassName}`}>
        <BasesIconWrapper
          className={`${enabled ? "class" : "class-2"}`}
          color={basesIconWrapperColor}
          colorClassName={basesIconWrapperColorClassName}
        />
      </div>
    </div>
  );
};

BasesCheckbox.propTypes = {
  enabled: PropTypes.bool,
  basesIconWrapperColor: PropTypes.string,
};
