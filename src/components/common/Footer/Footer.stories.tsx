import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";
import { Global } from "@emotion/react";
import reset from "../../../styles/reset";

export default {
  title: "component/Footer",
  component: Footer
} as ComponentMeta<typeof Footer>;
export const Default: ComponentStory<typeof Footer> = () => (
  <div>
    <Global styles={reset} />
    <Footer />
  </div>
);
