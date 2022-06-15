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
  email: string;
  place: string;
  startDate: string;
  expectedDate: string;
}

const PostHeader: React.FC<PostHeaderInterface> = ({
  title,
  authorId,
  createdAt,
  channel,
  email,
  place,
  startDate,
  expectedDate
}) => {
  return (
    <>
      <S.FlexBetween>
        <span>
          <BackIcon />
        </span>
        <span>
          <HeartIcon />
          <span>12{/* 추후에 받아올 예정 */}</span>
        </span>
      </S.FlexBetween>
      <S.PostTitle>{title}</S.PostTitle>
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
        email={email}
        place={place}
        startDate={startDate}
        expectedDate={expectedDate}
      ></PostSummary>
    </>
  );
};

export default PostHeader;
