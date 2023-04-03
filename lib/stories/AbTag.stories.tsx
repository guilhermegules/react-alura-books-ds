import { Meta, StoryFn } from "@storybook/react";
import AbTag from "../components/AbTag";

export default {
  title: "Components/AbTag",
  component: AbTag,
} as Meta;

const Template: StoryFn<typeof AbTag> = (args) => <AbTag {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  text: "React",
};
