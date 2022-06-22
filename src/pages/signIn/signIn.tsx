import * as S from "./style";
import { InputBox, Button, AppLayout, PageLoading } from "@components/common";
import logoImg from "@assets/logos/logo_favicon.svg";
import { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "@utils/apis";
import storage from "@utils/storage";
import { useAuth } from "@contexts/AuthProvider";
import useForm from "@hooks/useForm";

type Values = {
  email: string;
  password: string;
};
const SignIn: FC = () => {
  const navigate = useNavigate();
  const { userInfo, onLogin } = useAuth();
  if (userInfo.isLoggedIn) {
    navigate("/");
  }
  const { values, errors, isLoading, handleChange, handleSubmit } =
    useForm<Values>({
      initialValue: {
        email: "",
        password: ""
      },

      onSubmit: async (values: Values) => {
        const res = await authAPI.signIn({
          email: values.email,
          password: values.password
        });
        const { user, token } = res.data;
        onLogin(user);
        storage.setItem("TOKEN", token);
        navigate("/");
      },

      validate: ({ email, password }) => {
        const errors = {};
        if (!email) errors["email"] = "이메일을 입력해주세요";
        else if (!/^.+@.+\..+$/.test(email))
          errors["email"] = "올바른 이메일 형식이 아닙니다 ";

        if (!password) errors["password"] = "비밀번호를 입력해주세요";
        else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password))
          errors["password"] =
            "비밀번호는 숫자, 영문자로 이루어진 6~12자리여야 합니다";
        return errors;
      }
    });

  return (
    <Fragment>
      <AppLayout>
        <S.LogInWrapper action="" onSubmit={handleSubmit}>
          <S.Image>
            <img src={logoImg} alt="로고" onClick={() => navigate("/")} />
          </S.Image>
          <S.H2>로그인</S.H2>
          <S.MarginWrapper>
            <InputBox
              label="이메일"
              name="email"
              value={values.email}
              placeholder="이메일을 입력해주세요"
              onChange={handleChange}
              errorMessage={errors["email"]}
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
              errorMessage={errors["password"]}
            />
          </S.MarginWrapper>
          <S.MarginWrapper>
            <Button>Login</Button>
          </S.MarginWrapper>
          <S.CheckId>
            <span>회원이 아니신가요?</span>
            <span onClick={() => navigate("/signUp")}>회원가입</span>
          </S.CheckId>
        </S.LogInWrapper>
        <PageLoading isLoading={isLoading} />
      </AppLayout>
    </Fragment>
  );
};
export default SignIn;
