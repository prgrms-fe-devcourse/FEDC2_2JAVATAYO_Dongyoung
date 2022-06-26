import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputBox from "./InputBox";
export default {
  title: "Component/InputBox",
  component: InputBox,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text"
    },
    errorMessage: {
      defaultValue: "errorMessage",
      control: "text"
    },
    width: {
      defaultValue: 200,
      control: "number"
    },
    placeholder: {
      defaultValue: "placeholder",
      control: "text"
    },
    value: {
      defaultValue: "",
      control: "text"
    }
  }
} as ComponentMeta<typeof InputBox>;

export const Default: ComponentStory<typeof InputBox> = (args) => {
  return <InputBox {...args} />;
};
