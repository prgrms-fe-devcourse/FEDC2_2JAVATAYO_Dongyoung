import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logos/Logo.svg";
import { ReactComponent as Bell } from "@assets/icons/icon_bell.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import TempLogin from "../TempLogin";
import SearchBar from "../SearchBar";
import { notificationAPI } from "@utils/apis";
import ProfileImage from "../ProfileImage";
import DropDown from "../DropDown";
import { useAuth } from "@contexts/AuthProvider";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { onLogOut, userInfo } = useAuth();

  const [noticeContents, setNoticeContents] = useState([]);

  const notice = async () => {
    if (!userInfo.isLoggedIn) return;
    const { data } = await notificationAPI.getNotificationList();
  };

  const subNav = [
    {
      label: "마이페이지",
      event: () => navigate(`/profile/${userInfo._id}`)
    },
    {
      label: "로그아웃",
      event: () => onLogOut()
    }
  ];

  return (
    <S.Header>
      <h1>2JAVATAYO </h1>
      <Link to={"/"}>
        <Logo />
      </Link>
      {/* 임시 */}
      <TempLogin />
      {/* 임시 */}
      {userInfo.isLoggedIn ? (
        <S.LoggedIn>
          <SearchBar />
          <Link to={"/create"}>새글쓰기</Link>
          <DropDown contents={noticeContents}>
            <S.Notice isGetAlarm={noticeContents.length !== 0}>
              <Bell />
            </S.Notice>
          </DropDown>
          <DropDown contents={subNav}>
            <S.User>
              <ProfileImage
                size="sm"
                imgAlt={userInfo ? userInfo.fullName : null}
                imgSrc={userInfo ? userInfo.image : null}
              />
              <S.UserFullName>
                {userInfo ? userInfo.fullName : null}님
              </S.UserFullName>
            </S.User>
          </DropDown>
        </S.LoggedIn>
      ) : (
        <S.LoggedOut onClick={() => navigate("/signin")}>
          로그인 / 회원가입
        </S.LoggedOut>
      )}
    </S.Header>
  );
};

export default Header;
