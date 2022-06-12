import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "Component/Textarea",
  component: Textarea,
  argTypes: {
    isLogin: {
      defaultValue: true,
      description: "isLogin"
    },
    textareaType: {
      defaultValue: "comment",
      description: "textareaType"
    }
  }
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = (args) => (
  <div>
    <Textarea {...args}></Textarea>
  </div>
);
