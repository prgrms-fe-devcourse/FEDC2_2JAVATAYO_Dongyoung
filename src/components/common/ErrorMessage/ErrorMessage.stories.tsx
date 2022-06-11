import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";
export default {
  title: "Component/ErrorMessage",
  component: ErrorMessage,
  argTypes: {
    errorMessage: {
      defaultValue: "errorMessage",
      control: "text"
    }
  }
} as ComponentMeta<typeof ErrorMessage>;

export const Default: ComponentStory<typeof ErrorMessage> = (args) => {
  return <ErrorMessage {...args} />;
};
