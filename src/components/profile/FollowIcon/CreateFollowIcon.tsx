import { FC } from "react";
import { ReactComponent as CreateFollowSVG } from "@assets/icons/icon_create_follow.svg";
import { Id } from "../ProfileImageBox/index";

const CreateFollowIcon: FC<{ id: Id; onCreate }> = ({ id, onCreate }) => {
  return (
    <div onClick={onCreate}>
      <CreateFollowSVG width="20px" height="20px" />;
    </div>
  );
};

export default CreateFollowIcon;
