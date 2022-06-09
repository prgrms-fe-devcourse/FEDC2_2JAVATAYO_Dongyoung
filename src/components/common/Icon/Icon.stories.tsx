import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Component/Icon",
  component: Icon,
  argTypes: {
    width: {
      description: "width"
    },
    height: {
      description: "height"
    },
    onClick: {
      control: {
        action: "clicked"
      },
      description: "Icon을 클릭할 때 실행되는 EventHandler"
    }
  }
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => (
  <div>
    <Icon {...args}>{args.children}</Icon>
  </div>
);
