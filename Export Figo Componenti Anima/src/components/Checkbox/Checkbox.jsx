/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { BasesCheckbox } from "../BasesCheckbox";
import "./style.css";

export const Checkbox = ({
  stateProp,
  label,
  selected,
  className,
  radioWrapperClassName,
  basesCheckboxBasesIconWrapperColor = "/img/color-17.svg",
  labelClassName,
  text = "Label",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    label: label || true,
    selected: selected || false,
  });

  return (
    <div
      className={`checkbox label-${state.label} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className={`radio-wrapper ${state.state} selected-${state.selected} label-0-${state.label} ${radioWrapperClassName}`}
      >
        <BasesCheckbox
          basesIconWrapperColor={basesCheckboxBasesIconWrapperColor}
          basesIconWrapperColorClassName={`${
            state.selected ? "class-5" : state.label && !state.selected ? "class-6" : "class-7"
          }`}
          enabled={state.selected ? true : undefined}
          thumbClassName={`${!state.selected && ["default", "disabled"].includes(state.state) && "class-3"} ${
            state.selected && ["default", "disabled"].includes(state.state) && "class-4"
          }`}
        />
        {state.label && <div className={`label ${labelClassName}`}>{text}</div>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.label === true && state.selected === false && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: true,
          selected: false,
          state: "hover",
        };
    }
  }

  if (state.label === true && state.selected === false && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: true,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === true && state.selected === false && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: true,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === true && state.selected === true && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: true,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: false,
          selected: false,
          state: "hover",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: false,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: false,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: false,
          selected: true,
          state: "hover",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: false,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: false,
          selected: false,
          state: "default",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  stateProp: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
  label: PropTypes.bool,
  selected: PropTypes.bool,
  basesCheckboxBasesIconWrapperColor: PropTypes.string,
  text: PropTypes.string,
};
