import { FC, useState } from "react";
import { Button } from "@components/common";
import { followAPI } from "@utils/apis";
import { IFollow } from "../../../types/model";
import * as S from "./style";

// User
//   following: [], 유저가 팔로우하고 있는 값들
//   followers: [], 유저를 팔로우하고 있는 값들
// 방문자가 프로필 유저를 팔로잉하고 있는지 체크
interface FollowIconInterface {
  following: IFollow[];
  profileUserId: string;
  visitorUserId: string;
  handleCreateFollow: (followData) => void;
  handleDeleteFollow: (followData) => void;
}

const FollowIcon: FC<FollowIconInterface> = ({
  following,
  profileUserId,
  handleCreateFollow,
  handleDeleteFollow
}) => {
  const [isFollower, setIsFollower] = useState(() =>
    following.some(({ user }) => user === profileUserId)
  );

  const onCreateFollow = async () => {
    const { data: followData } = await followAPI.createFollow(profileUserId);
    setIsFollower(true);
    handleCreateFollow(followData);
  };

  const onDeleteFollow = async () => {
    const idx = following.findIndex(({ user }) => user === profileUserId);

    const { data: followData } = await followAPI.deleteFollow(
      following[idx]._id
    );
    setIsFollower(false);
    handleDeleteFollow(followData);
  };

  return (
    <div>
      {isFollower ? (
        <Button buttonType="red-line" onClick={onDeleteFollow} width="114">
          언팔로우하기
        </Button>
      ) : (
        <Button buttonType="gray-line" onClick={onCreateFollow} width="114">
          팔로우하기
        </Button>
      )}
    </div>
  );
};

export default FollowIcon;
