import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logos/Logo.svg";
import TempLogin from "../TempLogin";
interface HeaderInterface {
  isLoggedIn?: boolean;
  userName?: string;
}

const Header: React.FC<HeaderInterface> = ({
  isLoggedIn = false,
  userName = ""
}) => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <img
        src={Logo}
        alt="Logo"
        onClick={
          isLoggedIn
            ? () => {
                window.confirm("메인으로 돌아가시겠습니까?");
                navigate("/");
              }
            : () => navigate("/")
        }
      />
      {/* 임시 */}
      <TempLogin />
      {/* 임시 */}
      <div>
        {isLoggedIn ? (
          <S.LoggedIn>
            <div>새글쓰기</div>
            <div>알람</div>
            <div>프로필</div>
            <div>{userName}님</div>
          </S.LoggedIn>
        ) : (
          <S.Loggedout onClick={() => console.log("navigate")}>
            로그인 / 회원가입
          </S.Loggedout>
        )}
      </div>
    </S.Header>
  );
};

export default Header;
