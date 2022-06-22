import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppLayout from "@components/common/AppLayout";
import { PostHeader, PostBody, PostFooter } from "@components/detail";
import postAPI from "@utils/apis/post";
import commentAPI from "@utils/apis/comment";
import authAPI from "@utils/apis/auth";
import { IPost } from "../../types/model";
import storage from "@utils/storage";
import { useAuth } from "@contexts/AuthProvider";

type DetailInterface = { post?: IPost };

const Detail: React.FC<DetailInterface> = ({ post = null }) => {
  const [postDetail, setPostDetail] = useState(POST_INIT); // 이후 Dummy Data 제거
  const [titleObj, setTitleObj] = useState({});
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState("");
  const { onLogOut, userInfo } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const editNavigate = useNavigate();
  const backNavigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.substring(8);
  const { author, likes } = postDetail;
  let paramTitle;
  let paramIntroduction;
  let paramEmail;
  let paramExpectedDate;
  let paramPlace;
  let paramStartDate;
  let paramChannel;
  let paramSkills;
  let paramPeople;
  let editParamChannel;
  const postAuth = author._id === userId;
  useEffect(() => {
    const hasToken = storage.getItem("TOKEN", false) ? true : false;
    setIsLoggedIn(hasToken);
    checkUser();
    getPostDetail(postId);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getPostDetail(postId);
  }, [postId]);
  const checkUser = async () => {
    const { data } = await authAPI.checkAuthUser();
    setUserId(data._id);
  };

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
      }
    }
  };

  const postEditHandler = () => {
    editNavigate(`/edit/${titleObj[prop].channel}/${postId}`, {
      state: {
        postId: postId != null ? postId : "",
        title: paramTitle != null ? paramTitle : "",
        place: paramPlace != null ? paramPlace : "",
        email: paramEmail != null ? paramEmail : "",
        startDate: paramStartDate != null ? paramStartDate : "",
        expectedDate: paramExpectedDate != null ? paramExpectedDate : "",
        channel: editParamChannel != null ? editParamChannel : "",
        people: paramPeople != null ? paramPeople : "",
        skills: paramSkills != null ? paramSkills : "",
        introduction: paramIntroduction != null ? paramIntroduction : "",
        image: postDetail.image != null ? postDetail.image : "",
        imagePublicId:
          postDetail.imagePublicId != null ? postDetail.imagePublicId : ""
      }
    });
    window.scrollTo(0, 0);
  };

  const postDeleteHandler = async () => {
    if (
      window.confirm(
        `게시글을 정말로 삭제하시겠습니까?
게시물이 삭제되면 복구할 수 없습니다.`
      )
    ) {
      try {
        await postAPI.deletePost(postId);
        backNavigate(-1);
      } catch (error) {
        alert("잘못된 접근입니다!!");
        console.error(error);
        window.location.reload();
      }
    }
  };

  const getChannel = (channel) => {
    editParamChannel = channel;
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
  const localDate = new Date(postDetail.updatedAt)
    .toLocaleDateString()
    .replaceAll(" ", "")
    .substring(0, 9);
  return (
    <AppLayout>
      <div>
        <PostHeader
          postId={postId}
          userId={userId}
          likes={likes}
          title={paramTitle}
          authorId={postDetail.author._id}
          authorFullname={postDetail.author.fullName}
          authorImage={postDetail.author.image}
          updatedAt={localDate}
          channel={paramChannel}
          people={paramPeople}
          email={paramEmail}
          place={paramPlace}
          startDate={paramStartDate}
          expectedDate={paramExpectedDate}
          skills={paramSkills}
        />
        <PostBody
          introduction={paramIntroduction}
          postEdit={postEditHandler}
          postDelete={postDeleteHandler}
          imageSrc={postDetail.image}
          isAuthor={postAuth}
        />
        <PostFooter
          comments={comments}
          userId={userId}
          userImage={userInfo.image}
          userName={userInfo.fullName}
          postId={postId}
          postAuthorId={postDetail.author._id}
          isLoggedIn={isLoggedIn}
          setComments={setComments}
          deleteComment={deleteComment}
        />
      </div>
    </AppLayout>
  );
};
export default Detail;

const POST_INIT = {
  likes: [
    {
      _id: "",
      user: "",
      post: "",
      createdAt: "",
      updatedAt: "",
      __v: 0
    }
  ],
  comments: [
    {
      _id: "",
      comment: "",
      author: "",
      post: "", // 포스트 id
      createdAt: "",
      updatedAt: ""
    }
  ],
  _id: "",
  title: "",
  channel: {
    authRequired: false,
    posts: [],
    _id: "",
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    __v: 0
  },
  author: {
    role: "",
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
    _id: "",
    fullName: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    username: "",
    image: "",
    imagePublicId: "",
    coverImage: "",
    coverImagePublicId: ""
  },
  createdAt: "",
  updatedAt: "",
  __v: 0,
  image: "",
  imagePublicId: ""
};
