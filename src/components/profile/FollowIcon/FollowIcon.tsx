import { FC, useState } from "react";
import { Id } from "../ProfileImageBox/ProfileImageBox";
import DeleteFollowIcon from "./DeleteFollowIcon";
import CreateFollowIcon from "./CreateFollowIcon";
import * as S from "./style";

interface FollowIconInterface {
  id: Id;
  profileFullName: string;
}

const FollowIcon: FC<FollowIconInterface> = ({ id, profileFullName }) => {
  const [canFollow, setCanFollow] = useState(false);

  const handleCreateFollow = () => setCanFollow(false);
  const handleDeleteFollow = () => setCanFollow(true);

  return (
    <S.FollowIcon>
      {canFollow ? (
        <CreateFollowIcon id={id} onCreate={handleCreateFollow} />
      ) : (
        <DeleteFollowIcon
          profileFullName={profileFullName}
          id={id}
          onDelete={handleDeleteFollow}
        />
      )}
    </S.FollowIcon>
  );
};

export default FollowIcon;
