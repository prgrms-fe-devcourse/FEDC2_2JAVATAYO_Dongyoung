import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileImage from ".";

export default {
  title: "Component/ProfileImage",
  component: ProfileImage,
  argTypes: {
    display: {
      control: "boolean"
    },
    size: {
      defaultValue: "sm",
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" }
    },
    onClick: {
      defaultValue: null
    }
  }
} as ComponentMeta<typeof ProfileImage>;

const Template = (args) => <ProfileImage {...args} />;

export const Default: ComponentStory<typeof ProfileImage> = Template.bind({});

export const Image: ComponentStory<typeof ProfileImage> = (args) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <div>실제 이미지</div>
        <img src={args.imgSrc} alt={args.imgAlt} />
      </div>
      <div>
        <div>ProfileImage</div>
        <ProfileImage {...args} />
      </div>
    </div>
  );
};
Image.args = {
  imgSrc: "https://picsum.photos/200"
};

export const OnClick: ComponentStory<typeof ProfileImage> = Template.bind({});
OnClick.args = {
  imgSrc: "https://picsum.photos/200",
  onClick: () => {
    alert("onClick!");
  }
};

export const Display: ComponentStory<typeof ProfileImage> = (args) => (
  <>
    <span>Display Test</span>
    <ProfileImage {...args} />
  </>
);
Display.args = {
  imgSrc: "https://picsum.photos/200"
};
