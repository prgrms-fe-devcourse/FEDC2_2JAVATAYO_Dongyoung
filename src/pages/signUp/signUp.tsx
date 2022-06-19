import * as S from "./style";
import {
  InputBox,
  Button,
  AppLayout,
  logoImg
} from "../../components/signIn/index";
import { useNavigate } from "react-router";
import useSignUp from "../../hooks/useSignUp";
import type { error } from "../../hooks/useSignUp";
const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useSignUp({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      secondPwd: ""
    },
    isError: ({ fullName, email, password }) => {
      const errors: error = {};
      if (!email) errors.email = "이메일을 입력해주세요";
      else if (!/^.+@.+\..+$/.test(email))
        errors.email = "올바른 이메일 형식이 아닙니다 ";

      if (!password) errors.password = "비밀번호를 입력해주세요";
      else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/.test(password))
        errors.password = "비밀번호는 하나 이상의 문자와 숫자여야 합니다";
      else if (password.length < 6 || password.length > 12)
        errors.password = "비밀번호는 6자리 이상 12자리 이하여야 합니다";
      return errors;
    }
  });
  return (
    <AppLayout>
      <S.SignUpWrapper>
        <S.Image>
          <img src={logoImg} alt="로고" onClick={() => navigate("/")} />
        </S.Image>
        <S.H2>회원가입</S.H2>
        <S.ConfirmWrapper>
          <InputBox
            label="닉네임"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            errorMessage={errors.fullName}
          />
          <Button buttonType="red-line">중복 확인</Button>
        </S.ConfirmWrapper>
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
          <InputBox
            label="비밀번호 확인"
            name="secondPwd"
            type="password"
            value={values.secondPwd}
            onChange={handleChange}
            errorMessage={errors.secondPwd}
          />
        </S.MarginWrapper>
        <S.MarginWrapper>
          <Button>로그인</Button>
        </S.MarginWrapper>
      </S.SignUpWrapper>
    </AppLayout>
  );
};
export default SignUp;
