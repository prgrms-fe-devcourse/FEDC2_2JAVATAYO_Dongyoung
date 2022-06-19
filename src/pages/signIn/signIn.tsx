import * as S from "./style";
import {
  InputBox,
  Button,
  AppLayout,
  logoImg
} from "../../components/signIn/index";
import { useNavigate } from "react-router-dom";
import useSignIn from "../../hooks/useSignIn";
import type { error } from "../../hooks/useSignIn";
const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useSignIn({
    initialValues: {
      email: "",
      password: ""
    },
    isError: ({ email, password }) => {
      const errors: error = {};
      if (!email) errors.email = "이메일을 입력해주세요";
      else if (!/^.+@.+\..+$/.test(email))
        errors.email = "올바른 이메일 형식이 아닙니다 ";

      if (!password) errors.password = "비밀번호를 입력해주세요";
      else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password))
        errors.password =
          "비밀번호는 숫자, 문자로 이루어진 6~12자리여야 합니다";
      return errors;
    }
  });

  return (
    <AppLayout>
      <S.LogInWrapper>
        <S.Image>
          <img src={logoImg} alt="로고" onClick={() => navigate("/")} />
        </S.Image>
        <S.H2>로그인</S.H2>
        <S.MarginWrapper>
          <InputBox
            label="이메일"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorMessage={errors.email}
          />
        </S.MarginWrapper>
        <S.MarginWrapper>
          <InputBox
            label="비밀번호"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            errorMessage={errors.password}
          />
        </S.MarginWrapper>
        <S.MarginWrapper>
          <Button onClick={handleSubmit}>로그인</Button>
        </S.MarginWrapper>
        <S.CheckId>
          <span>회원이 아니신가요?</span>
          <span onClick={() => navigate("/signUp")}>회원가입</span>
        </S.CheckId>
      </S.LogInWrapper>
    </AppLayout>
  );
};
export default SignIn;
