import { Meta, StoryFn } from "@storybook/react";
import AbCard from "../components/AbCard";

export default {
  title: "Components/AbCard",
  component: AbCard,
} as Meta;

const Template: StoryFn<typeof AbCard> = () => <AbCard>Content</AbCard>;

export const Primary = Template.bind({});
