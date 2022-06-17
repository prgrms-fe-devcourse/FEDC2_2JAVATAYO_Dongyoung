import AppLayout from "../components/common/AppLayout";
import PostHeader from "../components/detail/PostHeader";
import PostBody from "../components/detail/PostBody";
import PostFooter from "@components/detail/PostFooter";
//import postAPI from "../utils/apis/post";

const Detail: React.FC = () => {
  const detail = DUMMY_DETAIL;

  const baseURL = `${process.env.REACT_APP_END_POINT}:${process.env.REACT_APP_PORT}`;

  const introduction = `안녕하세요. 현재 서울에서 개발을 하고 있는 개발자입니다.
    사이드 프로젝트 경험을 쌓고 싶어 팀을 구해봅니다.
    서울에서 근무중이라 온/오프라인 상관 없습니다.
    
    기술 스택은
    Front: React, Next.js, TS
    Back: Express, Nestjs, Django
    Back보다는 Front를 더 선호합니다.
  `;

  return (
    <AppLayout>
      <div>
        <PostHeader
          title={detail.title}
          authorId={detail.author.fullName}
          createdAt={detail.createdAt}
          channel={"프론트엔드"}
          email={"test@test.com"}
          place={"온라인"}
          startDate={"2022/06/06"}
          expectedDate={"3주"}
        />
        <PostBody introduction={introduction} />
        <PostFooter comments={detail.comments} />
        <PostBody introduction={introduction} />
      </div>
    </AppLayout>
  );
};
export default Detail;

const DUMMY_DETAIL = {
  likes: [
    {
      _id: "62a62a42c882bf3a287f9c99",
      user: "62a0cf0bc882bf3a287f907c",
      post: "62a62988c882bf3a287f9c8a",
      createdAt: "2022-06-12T18:02:42.424Z",
      updatedAt: "2022-06-12T18:02:42.424Z",
      __v: 0
    }
  ],
  comments: [
    {
      _id: "1",
      comment: `안녕하세요 개인적으로 프로젝트에 궁금한 점이 있어서 질문남겨요.
        혹시 프로젝트는 어떤 기획으로 정해져 있나요? 어떤 주제로 할 생각이신가요? 
        디자이너는 따로 구하는 글이 없던데 이미 모집되어 있으신지요.`,
      author: "김남경",
      post: "62a62988c882bf3a287f9c8a", // 포스트 id
      createdAt: "2022.06.14",
      updatedAt: "2022.06.14"
    },
    {
      _id: "2",
      comment: `안녕하세요 개인적으로 프로젝트에 궁금한 점이 있어서 질문남겨요. 
        혹시 프로젝트는 어떤 기획은 정해져 있나요? 어떤 주제로 할 생각이신가요? 
        디자이너는 따로 구하는 글이 없던데 이미 모집되어 있으신지요안녕하세요 개인적으로 프로젝트에 궁금한 점이 있어서 질문남겨요. 
        혹시 프로젝트는 어떤 기획은 정해져 있나요? 어떤 주제로 할 생각이신가요? 
        디자이너는 따로 구하는 글이 없던데 이미 모집되어 있으신지요안녕하세요 
        개인적으로 프로젝트에 궁금한 점이 있어서 질문남겨요. 혹시 프로젝트는 어떤 기획은 정해져 있나요? 
        어떤 주제로 할 생각이신가요? 디자이너는 따로 구하는 글이 없던데 이미 모집되어 있으신지요`,
      author: "마혜경",
      post: "62a62988c882bf3a287f9c8a", // 포스트 id
      createdAt: "2022.06.15",
      updatedAt: "2022.06.15"
    },
    {
      _id: "3",
      comment: `프로젝트 기간안에 다 할 수 있을까요?? ㅠㅠ`,
      author: "박유현",
      post: "62a62988c882bf3a287f9c8a", // 포스트 id
      createdAt: "2022.06.15",
      updatedAt: "2022.06.15"
    },
    {
      _id: "4",
      comment: `안녕하세요 개인적으로 프로젝트에 궁금한 점이 있어서 질문남겨요. 
        혹시 프로젝트는 어떤 기획은 정해져 있나요? 어떤 주제로 할 생각이신가요? 
        디자이너는 따로 구하는 글이 없던데 이미 모집되어 있으신지요`,
      author: "정현진",
      post: "62a62988c882bf3a287f9c8a", // 포스트 id
      createdAt: "2022.06.15",
      updatedAt: "2022.06.15"
    }
  ],
  _id: "62a62988c882bf3a287f9c8a",
  title: "[유현] 백엔드 5명타요",
  channel: {
    authRequired: false,
    posts: [
      "62a62941c882bf3a287f9c5d",
      "62a62943c882bf3a287f9c63",
      "62a62946c882bf3a287f9c69",
      "62a62948c882bf3a287f9c6f",
      "62a6294ac882bf3a287f9c75",
      "62a62988c882bf3a287f9c8a",
      "62a6a0b04b451f749ea47aee"
    ],
    _id: "62a55de1c882bf3a287f961c",
    name: "back",
    description: "back",
    createdAt: "2022-06-12T03:30:41.075Z",
    updatedAt: "2022-06-13T02:28:00.835Z",
    __v: 0
  },
  author: {
    role: "Regular",
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: ["62a62a42c882bf3a287f9c99"],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "62a0cf0bc882bf3a287f907c",
    fullName: "유현naver",
    email: "puh0128@naver.com",
    createdAt: "2022-06-08T16:32:11.434Z",
    updatedAt: "2022-06-13T06:44:06.424Z",
    __v: 0,
    username: "유현naver",
    image: `https://res.cloudinary.com/learnprogrammers/image/upload/v1655058232/user/6ecb4177-78ea-4362-96a4-e95903a6e84a.png`,
    imagePublicId: "user/6ecb4177-78ea-4362-96a4-e95903a6e84a",
    coverImage: `https://res.cloudinary.com/learnprogrammers/image/upload/v1655058503/user/99bff83a-15db-4b49-bedc-7ae907aebbbe.jpg`,
    coverImagePublicId: "user/99bff83a-15db-4b49-bedc-7ae907aebbbe"
  },
  createdAt: "2022-06-12T17:59:36.277Z",
  updatedAt: "2022-06-12T18:02:42.434Z",
  __v: 0
};
