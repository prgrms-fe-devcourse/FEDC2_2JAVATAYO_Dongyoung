import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";
export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: "",
      control: "text"
    },
    width: {
      defaultValue: "100",
      control: "number"
    }
  }
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};
