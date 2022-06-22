import React from "react";
import PostTitle from "../PostTitle";
import ProfileImage from "@components/common/ProfileImage/index";
import PostSummary from "../PostSummary";
import LikeBtn from "@components/common/LikeBtn";
import { ILike, IUser } from "src/types/model";
import { ReactComponent as BackIcon } from "@assets/icons/icon_back.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface PostHeaderInterface {
  postId: string;
  userId: string;
  likes: ILike[];
  title: string;
  authorId: string;
  authorFullname: string;
  authorImage: string;
  updatedAt: string;
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
  authorFullname,
  authorImage,
  updatedAt,
  channel,
  people,
  email,
  place,
  startDate,
  expectedDate,
  skills
}) => {
  const homeNavigate = useNavigate();
  const userProfileNavigate = useNavigate();
  const backButtonClick = () => {
    homeNavigate("/");
    window.scrollTo(0, 0);
  };
  const userProfileClick = () => {
    userProfileNavigate(`/profile/${authorId}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <S.FlexBetween>
        <span onClick={backButtonClick} style={{ cursor: "pointer" }}>
          <BackIcon />
        </span>
        <S.CenterAlignItemSpan style={{ cursor: "pointer" }}>
          <LikeBtn likes={likes} userId={userId} postId={postId} />
        </S.CenterAlignItemSpan>
      </S.FlexBetween>
      <PostTitle>{title}</PostTitle>
      <S.FlexBetween style={{ alignItems: "end" }}>
        <S.CenterAlignItemSpan>
          <ProfileImage
            size="sm"
            imgAlt={authorFullname ? authorFullname : null}
            imgSrc={authorImage ? authorImage : null}
            onClick={userProfileClick}
          />
          <span>{authorFullname}</span>
        </S.CenterAlignItemSpan>
        <span>{updatedAt}</span>
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
