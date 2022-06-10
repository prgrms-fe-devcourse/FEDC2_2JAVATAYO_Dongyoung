import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";
export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text"
    },
    placeholder: {
      defaultValue: "",
      control: "text"
    },
    errorMsg: {
      defaultValue: "",
      control: "text"
    },
    width: {
      defaultValue: "200",
      control: "number"
    }
  }
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};
