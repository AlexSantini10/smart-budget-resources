import { TopBar } from ".";

export default {
  title: "Components/TopBar",
  component: TopBar,
  argTypes: {
    page: {
      options: ["home", "statistiche", "conti", "transazioni"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    page: "home",
    className: {},
  },
};
