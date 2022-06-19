import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppLayout from "@components/common/AppLayout";
import PostHeader from "@components/detail/PostHeader";
import PostBody from "@components/detail/PostBody";
import PostFooter from "@components/detail/PostFooter";
import postAPI from "@utils/apis/post";
import commentAPI from "@utils/apis/comment";

const Detail: React.FC = () => {
  const [postDetail, setPostDetail] = useState(DUMMY_DETAIL);
  const [titleObj, setTitleObj] = useState({});
  const [comments, setComments] = useState([]);
  const editNavigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.substring(8);
  let paramTitle;
  let paramIntroduction;
  let paramEmail;
  let paramExpectedDate;
  let paramPlace;
  let paramStartDate;
  let paramChannel;
  let paramSkills;
  let paramPeople;

  const getPostDetail = async (id) => {
    try {
      const { data } = await postAPI.getPostDetail(id);
      setPostDetail(data);
      const titleObject = JSON.parse(data.title);
      setTitleObj(titleObject);
      setComments(data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (event, id) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      try {
        await commentAPI.deleteComment(id);
        setComments(comments.filter((comment) => comment._id !== id));
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    }
  };

  const editHandler = () => {
    editNavigate("/edit/" + `${postId}`, {
      state: {
        title: paramTitle,
        place: paramPlace,
        email: paramEmail,
        startDate: paramStartDate,
        expectedDate: paramExpectedDate,
        introduction: paramIntroduction
      }
    });
  };

  useEffect(() => {
    getPostDetail(postId);
  }, []);

  const getChannel = (channel) => {
    switch (channel) {
      case "front":
        return "프론트엔드";
      case "back":
        return "백엔드";
      case "AI":
        return "AI";
      case "ios":
        return "iOS";
      case "android":
        return "안드로이드";
      case "designer":
        return "디자이너";
      default:
        return channel;
    }
  };

  const string1 = JSON.parse(JSON.stringify(postDetail.title));
  let prop;
  for (prop in titleObj) {
    if (Object.prototype.hasOwnProperty.call(titleObj, prop)) {
      switch (prop) {
        case "title":
          paramTitle = titleObj[prop];
          break;
        case "introduction":
          paramIntroduction = titleObj[prop];
          break;
        case "email":
          paramEmail = titleObj[prop];
          break;
        case "expectedDate":
          paramExpectedDate = titleObj[prop];
          break;
        case "place":
          paramPlace = titleObj[prop];
          break;
        case "startDate":
          paramStartDate = titleObj[prop].replaceAll("/", ".");
          break;
        case "parts":
          paramChannel = getChannel(titleObj[prop].channel);
          paramSkills = titleObj[prop].skills;
          paramPeople = titleObj[prop].people;
          break;
        default:
          break;
      }
    }
  }
  const author = postDetail.author.fullName;
  const updatedAt = postDetail.updatedAt;
  const detail = DUMMY_DETAIL;
  return (
    <AppLayout>
      <div>
        <PostHeader
          title={paramTitle}
          authorId={postDetail.author.fullName}
          createdAt={postDetail.updatedAt.substring(0, 10).replaceAll("-", ".")}
          channel={paramChannel}
          people={paramPeople}
          email={paramEmail}
          place={paramPlace}
          startDate={paramStartDate}
          expectedDate={paramExpectedDate}
          skills={paramSkills}
        />
        <PostBody introduction={paramIntroduction} postEdit={editHandler} />
        <PostFooter
          comments={comments}
          postId={postId}
          setComments={setComments}
          deleteComment={deleteComment}
        />
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
