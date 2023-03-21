import { Meta, StoryFn } from "@storybook/react";

import { AbButton } from "../components/AbButton";

export default {
  title: "Components/AbButton",
  component: AbButton,
} as Meta;

const Template: StoryFn<typeof AbButton> = () => <AbButton />;

export const Primary = Template.bind({});
