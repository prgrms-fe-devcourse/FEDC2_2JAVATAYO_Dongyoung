import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    buttonType: {
      defaultValue: "red",
      description: "type"
    },
    width: {
      defaultValue: "100%",
      description: "width"
    },
    height: {
      defaultValue: "40",
      description: "height"
    },
    isRound: {
      defaultValue: false,
      description: "isRound"
    },
    label: {
      defaultValue: "Button",
      description: "label"
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
