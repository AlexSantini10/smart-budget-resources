import { DebitoCredito } from ".";

export default {
  title: "Components/DebitoCredito",
  component: DebitoCredito,
  argTypes: {
    tipo: {
      options: ["debito", "credito"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tipo: "debito",
    className: {},
  },
};
