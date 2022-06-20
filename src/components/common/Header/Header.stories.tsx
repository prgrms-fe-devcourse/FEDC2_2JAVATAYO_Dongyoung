import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
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
      defaultValue: "",
      control: "text"
    }
  }
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => {
  return (
    <BrowserRouter>
      <Header {...args}></Header>
    </BrowserRouter>
  );
};
