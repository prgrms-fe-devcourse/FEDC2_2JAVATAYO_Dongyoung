import React from "react";
import PostTitle from "./PostTitle";
import ProfileImage from "../../common/ProfileImage/index";
import PostSummary from "./PostSummary";
import { ReactComponent as BackIcon } from "../../../assets/icons/icon_back.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icons/icon_heart.svg";
import { ReactComponent as HeartFillIcon } from "../../../assets/icons/icon_heart_fill.svg";
import * as S from "./style";

interface PostHeaderInterface {
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
  return (
    <>
      <S.FlexBetween>
        <span>
          <BackIcon />
        </span>
        <S.CenterAlignItemSpan>
          <HeartIcon />
          <span>12{/* 추후에 받아올 예정 */}</span>
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
