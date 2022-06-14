import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";
export default {
  title: "Component/Label",
  component: Label,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text"
    }
  }
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (args) => {
  return <Label {...args} />;
};
