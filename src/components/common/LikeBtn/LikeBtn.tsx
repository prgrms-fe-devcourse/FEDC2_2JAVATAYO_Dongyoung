import { likeAPI } from "@utils/apis";
import React, { useEffect, useState } from "react";
import { ILike } from "src/types/model";
import { ReactComponent as HeartIcon } from "../../../assets/icons/icon_heart.svg";
import { ReactComponent as HeartFillIcon } from "../../../assets/icons/icon_heart_fill.svg";
import * as S from "./style";

type LikeBtnInterface = {
  likes: ILike[];
  postId: string;
  userId?: string;
};

const LikeBtn: React.FC<LikeBtnInterface> = ({ likes, postId, userId }) => {
  const [likeId, setLikeId] = useState<string>(null);
  const [totalLike, setTotalLike] = useState(0);

  const clickLikeBtn = async (e) => {
    e.stopPropagation();
    try {
      if (likeId) {
        await likeAPI.deleteLike(likeId);
        setLikeId(null);
        setTotalLike(totalLike - 1);
      } else {
        const { data } = await likeAPI.createLike(postId);
        setLikeId(data._id);
        setTotalLike(totalLike + 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const userLike = likes.filter((like) => {
      return like.user === userId;
    });
    setLikeId(userLike[0] ? userLike[0]._id : null);
    setTotalLike(likes.length);
  }, [likes, userId]);

  return (
    <S.LikeBtn onClick={userId ? clickLikeBtn : null} userId={userId}>
      {likeId ? <HeartFillIcon /> : <HeartIcon />}
      <span>{totalLike}</span>
    </S.LikeBtn>
  );
};

export default LikeBtn;
