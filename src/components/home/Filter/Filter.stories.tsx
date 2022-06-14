import { Global } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Filter from "./Filter";
import reset from "../../../styles/reset";
import { useState } from "react";

export default {
  title: "Page/Filter",
  component: Filter,
  argTypes: {}
} as ComponentMeta<typeof Filter>;

export const Default: ComponentStory<typeof Filter> = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  return (
    <>
      <Global styles={reset} />
      <Filter setPost={setPost}></Filter>
      {JSON.stringify(post)}
    </>
  );
};
