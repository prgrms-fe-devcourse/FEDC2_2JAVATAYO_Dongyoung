import { Global } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import reset from "../../../styles/reset";
import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
  argTypes: {
    userId: {
      control: "text",
      defaultValue: null
    }
  }
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <>
    <Global styles={reset} />
    <Card userId={args.userId} />
    <br />
    <p>userId이 없으면 ❤클릭불가능</p>
  </>
);
