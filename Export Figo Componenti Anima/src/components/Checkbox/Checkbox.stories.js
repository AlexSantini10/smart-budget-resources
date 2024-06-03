import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "disabled",
    label: true,
    selected: true,
    className: {},
    radioWrapperClassName: {},
    basesCheckboxBasesIconWrapperColor: "/img/color-17.svg",
    labelClassName: {},
    text: "Label",
  },
};
