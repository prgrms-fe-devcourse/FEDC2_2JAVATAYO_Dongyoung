import { ComponentMeta, ComponentStory } from "@storybook/react";
import { number } from "prop-types";
import DropDown from "./DropDown";

export default {
  title: "component/DropDown",
  component: DropDown,
  argTypes: {
    top: {
      defaultValue: 50,
      control: { action: number }
    },
    left: {
      defaultValue: 0,
      control: { action: number }
    }
  }
} as ComponentMeta<typeof DropDown>;

export const Default: ComponentStory<typeof DropDown> = (args) => {
  const event = (num) => {
    alert(num + "클릭");
  };

  const contents = [
    {
      label: "닉네임변경",
      event: () => event(1)
    },
    {
      label: "비밀번호 변경",
      event: () => event(2)
    },
    {
      label: "프로필 변경",
      event: () => event(3)
    }
  ];

  return (
    <DropDown contents={contents} {...args}>
      <button>드롭다운</button>
    </DropDown>
  );
};
