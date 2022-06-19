import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logos/Logo.svg";
import { ReactComponent as Bell } from "@assets/icons/icon_bell.svg";
import { useEffect, useState } from "react";
import storage from "@utils/storage";
import { Link } from "react-router-dom";
import TempLogin from "../TempLogin";
import { authAPI } from "@utils/apis";
import SearchBar from "../SearchBar";
import ProfileImage from "../ProfileImage";

const Header: React.FC = () => {
  const navigate = useNavigate();

  //이후 contextAPI로 변경
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ fullName: "test" });
  const { fullName } = userData;
  const userInfo = async () => {
    const { data } = await authAPI.checkAuthUser();
    setUserData(data);
  };
  useEffect(() => {
    userInfo();
  }, [isLoggedIn]);
  //이후 contextAPI로 변경

  useEffect(() => {
    const hasToken = storage.getItem("TOKEN", false) ? true : false;
    setIsLoggedIn(hasToken);
    alert;
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
          <S.Notice isGetAlarm={true} onClick={() => alert("알림")}>
            <Bell />
          </S.Notice>
          <S.User onClick={() => alert("사용자 토글매뉴")}>
            <ProfileImage size="sm" />
            <S.UserFullName>{fullName} 님</S.UserFullName>
          </S.User>
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
