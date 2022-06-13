import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => {
  return <Header></Header>;
};
