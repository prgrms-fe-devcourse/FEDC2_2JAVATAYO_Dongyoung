import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logos/Logo.svg";
import { ReactComponent as Bell } from "@assets/icons/icon_bell.svg";
import { useEffect, useState } from "react";
import storage from "@utils/storage";
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

  //이후 contextAPI로 변경
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [noticeContents, setNoticeContents] = useState([]);

  const logOut = () => {
    storage.removeItem("TOKEN");
    onLogOut();
  };

  const notice = async () => {
    const { data } = await notificationAPI.getNotificationList();
    console.log(data);
  };

  const subNav = [
    {
      label: "마이페이지",
      event: () => navigate(`/profile/${userInfo._id}`)
    },
    {
      label: "로그아웃",
      event: () => logOut()
    }
  ];

  useEffect(() => {
    const hasToken = storage.getItem("TOKEN", false) ? true : false;
    setIsLoggedIn(hasToken);
    notice();
  }, []);

  return (
    <S.Header>
      <h1>2JAVATAYO </h1>
      <Link to={"/"}>
        <Logo />
      </Link>
      {/* 임시 */}
      <TempLogin setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {/* 임시 */}
      {isLoggedIn ? (
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
              <ProfileImage size="sm" />
              <S.UserFullName>{userInfo.fullName} 님</S.UserFullName>
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
