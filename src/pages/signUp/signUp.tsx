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
  const { values, errors, handleChange, handleSubmit, handleDuplicate } =
    useSignUp({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      },
      isError: ({ fullName, email, password, passwordConfirm }) => {
        const errors: error = {};
        if (!fullName) errors.fullName = "닉네임을 입력해주세요";
        else if (!/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{2,8}$/.test(fullName))
          errors.fullName = "닉네임은 2~8자리여야 합니다";
        if (!email) errors.email = "이메일을 입력해주세요";
        else if (!/^.+@.+\..+$/.test(email))
          errors.email = "올바른 이메일 형식이 아닙니다 ";

        if (!password) errors.password = "비밀번호를 입력해주세요";
        else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password))
          errors.password =
            "비밀번호는 숫자, 영문자로 이루어진 6~12자리여야 합니다";

        if (!passwordConfirm)
          errors.passwordConfirm = "비밀번호 확인을 입력해주세요";
        else if (passwordConfirm != password)
          errors.passwordConfirm = "위에 입력한 비밀번호와 같지 않습니다";
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
            placeholder="닉네임을 입력해주세요"
            onChange={handleChange}
            errorMessage={errors.fullName}
          />
          <Button buttonType="red-line" width={"120"} onClick={handleDuplicate}>
            중복 확인
          </Button>
        </S.ConfirmWrapper>
        <S.MarginWrapper>
          <InputBox
            label="이메일"
            name="email"
            value={values.email}
            placeholder="이메일을 입력해주세요"
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
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
            errorMessage={errors.password}
          />
        </S.MarginWrapper>
        <S.MarginWrapper>
          <InputBox
            label="비밀번호 확인"
            name="passwordConfirm"
            type="password"
            value={values.passwordConfirm}
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={handleChange}
            errorMessage={errors.passwordConfirm}
          />
        </S.MarginWrapper>
        <S.MarginWrapper>
          <Button onClick={handleSubmit}>Sign Up</Button>
        </S.MarginWrapper>
      </S.SignUpWrapper>
    </AppLayout>
  );
};
export default SignUp;
