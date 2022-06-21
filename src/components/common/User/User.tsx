import * as S from "./style";
import ProfileImage from "../ProfileImage";
import theme from "../../../styles/theme";
import { useNavigate } from "react-router-dom";

interface UserInterface {
  userId: string;
  userFullName: string;
  userImage: string;
}

const Comment: React.FC<UserInterface> = ({
  userId,
  userFullName,
  userImage
}) => {
  const userProfileNavigate = useNavigate();
  const userProfileClick = () => {
    userProfileNavigate(`/profile/${userId}`);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <S.UserWrapper>
        <ProfileImage
          size="sm"
          imgAlt={userFullName ? userFullName : null}
          imgSrc={userImage ? userImage : null}
          onClick={userProfileClick}
        />
        <span>{userFullName}</span>
      </S.UserWrapper>
    </div>
  );
};

export default Comment;
