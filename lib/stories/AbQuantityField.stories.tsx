import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import AbQuantityField from "../components/AbQuantityField";

export default {
  title: "Components/AbQuantityField",
  component: AbQuantityField,
} as Meta;

const Template: StoryFn<typeof AbQuantityField> = (args) => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <AbQuantityField
      quantity={quantity}
      onClick={setQuantity}
      hasNegativeNumbers={args.hasNegativeNumbers}
    />
  );
};

export const Default = Template.bind({});

export const WithNegativeNumbers = Template.bind({});

WithNegativeNumbers.args = {
  hasNegativeNumbers: true,
};
