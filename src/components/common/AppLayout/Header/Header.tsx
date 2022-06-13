import * as S from "./style";

interface HeaderInterface {
  isLoggedIn?: boolean;
  userName?: string;
  onLogin?: React.MouseEventHandler<HTMLDivElement>;
  goHome?: React.MouseEventHandler<HTMLDivElement>;
}

const Header: React.FC<HeaderInterface> = ({
  isLoggedIn,
  userName = "주형진",
  goHome,
  onLogin
}) => {
  return (
    <S.Header>
      <img
        src="https://i.ibb.co/PT3QPhd/Logo.png"
        alt="Logo"
        onClick={goHome}
      />
      <div>
        {isLoggedIn ? (
          <div className="loggedIn">
            <div>새글쓰기</div>
            <div>알람</div>
            <div>프로필</div>
            <div>{userName}님</div>
          </div>
        ) : (
          <div className="loggedOut" onClick={onLogin}>
            로그인 / 회원가입
          </div>
        )}
      </div>
    </S.Header>
  );
};

export default Header;
