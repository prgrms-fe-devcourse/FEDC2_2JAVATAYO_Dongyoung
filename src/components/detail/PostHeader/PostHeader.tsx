import React from "react";
import PostTitle from "./PostTitle";
import ProfileImage from "../../common/ProfileImage/index";
import PostSummary from "./PostSummary";
import LikeBtn from "../../common/LikeBtn";
import { ILike } from "src/types/model";
import { ReactComponent as BackIcon } from "../../../assets/icons/icon_back.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icons/icon_heart.svg";
import { ReactComponent as HeartFillIcon } from "../../../assets/icons/icon_heart_fill.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface PostHeaderInterface {
  postId: string;
  userId: string;
  likes: ILike[];
  title: string;
  authorId: string;
  createdAt: string;
  channel: string;
  people: string;
  email: string;
  place: string;
  startDate: string;
  expectedDate: string;
  skills: [];
}

const PostHeader: React.FC<PostHeaderInterface> = ({
  postId,
  userId,
  likes,
  title,
  authorId,
  createdAt,
  channel,
  people,
  email,
  place,
  startDate,
  expectedDate,
  skills
}) => {
  const homeNavigate = useNavigate();
  const backButtonClick = () => {
    homeNavigate("/");
  };
  return (
    <>
      <S.FlexBetween>
        <span onClick={backButtonClick}>
          <BackIcon />
        </span>
        <S.CenterAlignItemSpan>
          <LikeBtn likes={likes} userId={userId} postId={postId} />
        </S.CenterAlignItemSpan>
      </S.FlexBetween>
      <PostTitle>{title}</PostTitle>
      <S.FlexBetween style={{ alignItems: "end" }}>
        <S.CenterAlignItemSpan>
          <ProfileImage block={false} size={"md"}></ProfileImage>
          <span>{authorId}</span>
        </S.CenterAlignItemSpan>
        <span>{createdAt}</span>
      </S.FlexBetween>
      <br></br>
      <S.PostSection>요약</S.PostSection>
      <PostSummary
        channel={channel}
        people={people}
        email={email}
        place={place}
        startDate={startDate}
        expectedDate={expectedDate}
        skills={skills}
      ></PostSummary>
    </>
  );
};

export default PostHeader;
