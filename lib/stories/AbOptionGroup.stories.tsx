import { Meta, StoryFn } from "@storybook/react";
import AbGroupOption from "../components/AbOptionGroup";

export default {
  title: "Components/AbGroupOption",
  component: AbGroupOption,
} as Meta;

const Template: StoryFn<typeof AbGroupOption> = (args) => (
  <AbGroupOption {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      id: 1,
      content: "R$ 0,00",
      footerContent: ".pdf",
      title: "E-book",
    },
    {
      id: 2,
      content: "R$ 0,00",
      footerContent: "kindle",
      title: "E-book",
    },
    {
      id: 3,
      content: "R$ 0,00",
      footerContent: "paperback",
      title: "Physical book",
    },
  ],
  onSelect: (option) => console.log(option),
  defaultValue: {
    id: 1,
    content: "R$ 0,00",
    footerContent: ".pdf",
    title: "E-book",
  },
};
