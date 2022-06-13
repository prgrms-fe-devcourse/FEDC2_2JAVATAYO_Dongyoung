import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    isLoggedIn: {
      defaultValue: false,
      control: "boolean"
    },
    userName: {
      defaultValue: "주형진",
      control: "text"
    }
  }
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}></Header>;
};
