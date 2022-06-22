import { FC } from "react";
import { ReactComponent as Comment } from "@assets/icons/icon_reward_comment.svg";
import { ReactComponent as Love } from "@assets/icons/icon_reward_love.svg";
import { ReactComponent as Follow } from "@assets/icons/icon_reward_follow.svg";
import { ReactComponent as Post } from "@assets/icons/icon_reward_post.svg";
import { ReactComponent as Profile } from "@assets/icons/icon_reward_profile.svg";
import { ReactComponent as Cover } from "@assets/icons/icon_reward_cover.svg";
import * as S from "./style";

const Reward: FC<{ rewardLabel: string }> = ({ rewardLabel }) => {
  const KEY = rewardLabel.toUpperCase();
  return (
    <S.Box>
      <label>{REWARD[KEY].label}</label>
      {REWARD[KEY].svg}
    </S.Box>
  );
};

export default Reward;

const REWARD = {
  COMMENT: {
    label: (
      <S.Layout>
        <span>활발한</span>
        <span>댓글러</span>
      </S.Layout>
    ),
    svg: (
      <S.Icon>
        <Comment width={18} height={18} />
      </S.Icon>
    )
  },
  LOVE: {
    label: (
      <S.Layout>
        <span>사랑가득</span>
        <span>좋아요</span>
      </S.Layout>
    ),
    svg: (
      <S.ExceptionIcon>
        <Love />
      </S.ExceptionIcon>
    )
  },
  FOLLOW: {
    label: (
      <S.Layout>
        <span>팔로우왕</span>
        <span>인기쟁이</span>
      </S.Layout>
    ),
    svg: (
      <S.ExceptionIcon>
        <Follow />
      </S.ExceptionIcon>
    )
  },
  POST: {
    label: (
      <S.Layout>
        <span>너!</span>
        <span>내 동료가</span>
        <span>되어라</span>
      </S.Layout>
    ),
    svg: (
      <S.Icon>
        <Post width={18} height={18} />
      </S.Icon>
    )
  },
  PROFILE: {
    label: (
      <S.Layout>
        <span>세상에</span>
        <span>너를 보여줘</span>
      </S.Layout>
    ),
    svg: (
      <S.Icon>
        <Profile width={18} height={18} />
      </S.Icon>
    )
  },
  COVER: {
    label: (
      <S.Layout>
        <span>꾸밀 줄</span>
        <span>아는 멋쟁이</span>
      </S.Layout>
    ),
    svg: (
      <S.Icon>
        <Cover width={18} height={18} />
      </S.Icon>
    )
  }
};
