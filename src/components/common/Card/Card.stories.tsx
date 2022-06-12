import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Global } from "@emotion/react";
import reset from "../../../styles/reset";
import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
  argTypes: {
    post: {
      control: "object",
      defaultValue: {
        channel: "front",
        likes: [
          {
            _id: 123,
            user: "정현진", // 사용자 id
            post: "뎃글내용ㅇㅇㅇ",
            createdAt: "2022..",
            updatedAt: "123123"
          },
          {
            _id: 123,
            user: "정현진",
            post: "뎃글내용ㅇㅇㅇ",
            createdAt: "2022..",
            updatedAt: "123123"
          },
          {
            _id: 123,
            user: "정현진",
            post: "뎃글내용ㅇㅇㅇ",
            createdAt: "2022..",
            updatedAt: "123123"
          }
        ],
        title:
          "프로젝트 같이 하실분을 구해요어쩌구저쩌구 말줄임보려고 길게늘린거",
        people: 5,
        author: "마혜경",
        expectedDate: "3개월",
        createdAt: "2022.05.17"
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
