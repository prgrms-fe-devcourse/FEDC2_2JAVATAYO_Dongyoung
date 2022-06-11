import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    width: {
      defaultValue: "300",
      description: "width"
    },
    height: {
      defaultValue: "40",
      description: "height"
    },
    radius: {
      defaultValue: "0",
      description: "radius"
    },
    label: {
      defaultValue: "버튼",
      description: "value"
    },
    backgroundColor: {
      defaultValue: "red",
      description: "backgroundColor"
    },
    borderColor: {
      defaultValue: "red",
      description: "borderColor"
    },
    fontColor: {
      defaultValue: "white",
      description: "color"
    },
    onClick: {
      control: {
        action: "clicked"
      },
      description: "Button을 클릭할 때 실행되는 EventHandler"
    }
  }
} as ComponentMeta<typeof Button>;

const Template = (args) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}></Button>;
};

export const onClickButton: ComponentStory<typeof Button> = Template.bind({});

onClickButton.args = {
  onClick: () => {
    alert("onClick!!!!");
  }
};
