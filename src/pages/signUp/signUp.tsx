import * as S from "./style";
import { InputBox, Button, AppLayout, PageLoading } from "@components/common";
import logoImg from "@assets/logos/logo_favicon.svg";
import { FC, Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { authAPI, userAPI } from "@utils/apis";
import storage from "@utils/storage";
import { useAuth } from "@contexts/AuthProvider";
import useForm from "@hooks/useForm";

type Values = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
const SignUp: FC = () => {
  const navigate = useNavigate();
  const { userInfo, onLogin } = useAuth();
  if (userInfo.isLoggedIn) {
    navigate("/");
  }
  const [isChecked, setIsChecked] = useState(false);
  const { values, errors, isLoading, handleChange, handleSubmit } =
    useForm<Values>({
      initialValue: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      },

      onSubmit: async (values: Values) => {
        if (isChecked) {
          const res = await authAPI.signUp({
            email: values.email,
            fullName: values.fullName,
            password: values.password
          });
          const { user, token } = res.data;
          onLogin(user);
          storage.setItem("TOKEN", token);
          navigate("/");
        } else {
          alert("닉네임 중복확인을 해주세요");
        }
      },

      validate: ({ fullName, email, password, passwordConfirm }) => {
        const errors = {};
        if (!fullName) errors["fullName"] = "닉네임을 입력해주세요";
        else if (!/^.{2,8}$/.test(fullName))
          errors["fullName"] = "닉네임은 2~8자리여야 합니다";
        else if (!/^[가-힣|a-z|A-Z|\d]+$/.test(fullName))
          errors["fullName"] = "숫자, 문자로 이루어져야 합니다";

        if (!email) errors["email"] = "이메일을 입력해주세요";
        else if (!/^.+@.+\..+$/.test(email))
          errors["email"] = "올바른 이메일 형식이 아닙니다 ";

        if (!password) errors["password"] = "비밀번호를 입력해주세요";
        else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password))
          errors["password"] =
            "비밀번호는 숫자, 영문자로 이루어진 6~12자리여야 합니다";

        if (!passwordConfirm)
          errors["passwordConfirm"] = "비밀번호 확인을 입력해주세요";
        else if (passwordConfirm != password)
          errors["passwordConfirm"] = "위에 입력한 비밀번호와 같지 않습니다";
        return errors;
      }
    });
  const handleDuplicate = async () => {
    const response = await userAPI.getUserList();
    const names = response.data.map((x) => x.fullName);
    if (names.includes(values.fullName)) {
      alert("이미 있는 이름입니다.");
    } else if (values.fullName === "") {
      alert("빈값은 닉네임으로 쓸 수 없습니다");
    } else {
      alert("사용가능한 이름입니다.");
      setIsChecked(true);
    }
  };

  return (
    <Fragment>
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
              errorMessage={errors["fullName"]}
            />
            <Button
              buttonType="red-line"
              width={"120"}
              onClick={handleDuplicate}
            >
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
            <InputBox
              label="비밀번호 확인"
              name="passwordConfirm"
              type="password"
              value={values.passwordConfirm}
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={handleChange}
              errorMessage={errors["passwordConfirm"]}
            />
          </S.MarginWrapper>
          <S.MarginWrapper>
            <Button onClick={handleSubmit}>Sign Up</Button>
          </S.MarginWrapper>
        </S.SignUpWrapper>
        <PageLoading isLoading={isLoading} />
      </AppLayout>
    </Fragment>
  );
};
export default SignUp;
