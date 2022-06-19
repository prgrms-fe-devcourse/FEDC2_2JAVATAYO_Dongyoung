import * as S from "./style";
import { InputBox, Button, AppLayout, logoImg } from "./index";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  type error = {
    email?: string;
    password?: string;
  };
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
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
      else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
        errors.password = "비밀번호는 하나 이상의 문자와 숫자여야 합니다";
      else if (password.length < 6 || password.length > 12)
        errors.password = "비밀번호는 6자리 이상 12자리 이하여야 합니다";
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
