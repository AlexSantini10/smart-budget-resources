import { SchedaBudget } from ".";

export default {
  title: "Components/SchedaBudget",
  component: SchedaBudget,
  argTypes: {
    rispettato: {
      options: ["no", "si"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rispettato: "no",
    budgetNonSpeso: "/img/budget-non-speso.svg",
    budgetSpeso: "/img/budget-speso.svg",
  },
};
