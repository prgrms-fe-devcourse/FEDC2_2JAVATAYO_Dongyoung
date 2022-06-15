import { Global } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import reset from "../../../styles/reset";
import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
  argTypes: {
    post: {
      control: "object",
      defaultValue: {
        likes: [],
        comments: [],
        _id: "62a8cfb53229d934e9b64d3d",
        title: "제목이 글어지면 말줄임 으로 나오는지 테스트해볼",
        channel: {
          authRequired: false,
          posts: ["62a8cfb53229d934e9b64d3d", "62a958533229d934e9b6506e"],
          _id: "62a55eb0c882bf3a287f9623",
          name: "ios",
          description: "ios",
          createdAt: "2022-06-12T03:34:08.725Z",
          updatedAt: "2022-06-15T05:07:50.553Z",
          __v: 0
        },
        author: {
          role: "Regular",
          emailVerified: false,
          banned: false,
          isOnline: false,
          posts: [],
          likes: [],
          comments: [],
          followers: [],
          following: [],
          notifications: [],
          messages: [],
          _id: "62a6d6c977ad437a6b8f3614",
          fullName: "knk",
          email: "knk@gmail.com",
          createdAt: "2022-06-13T06:18:49.164Z",
          updatedAt: "2022-06-13T06:34:06.411Z",
          __v: 0
        },
        createdAt: "2022-06-14T18:13:09.711Z",
        updatedAt: "2022-06-14T18:18:27.673Z",
        __v: 0
      }
    },
    user: {
      control: "text",
      defaultValue: "마혜경"
    }
  }
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <>
    <Global styles={reset} />
    <Card post={args.post} user={args.user} />
    <br />
    <p>user이 없으면 ❤클릭불가능</p>
  </>
);
