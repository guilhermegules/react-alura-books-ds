import { Meta, StoryFn } from "@storybook/react";
import AbCard from "../components/AbCard";
import AbTextField from "../components/AbTextField";

export default {
  title: "Components/AbTextField",
  component: AbCard,
} as Meta;

const Template: StoryFn<typeof AbTextField> = (args) => (
  <AbTextField {...args} />
);

export const Email = Template.bind({});

Email.args = {
  label: "E-mail",
  type: "email",
  id: "1",
  name: "email-field",
  placeholder: "yourbest@email.com",
  onChange: (value) => console.log(`Email: ${value}`),
};

export const Text = Template.bind({});

Text.args = {
  label: "Text",
  type: "text",
  id: "2",
  name: "text-field",
  onChange: (text) => console.log(`Text: ${text}`),
};
