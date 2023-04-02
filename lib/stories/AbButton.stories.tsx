import { Meta, StoryFn } from "@storybook/react";

import { AbButton } from "../components/AbButton";

export default {
  title: "Components/AbButton",
  component: AbButton,
} as Meta;

const Template: StoryFn<typeof AbButton> = (args) => <AbButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttonStyle: "primary",
  text: "Primary button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttonStyle: "secondary",
  text: "Secondary button",
};
