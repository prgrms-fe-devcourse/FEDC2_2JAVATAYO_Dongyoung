export {};
import * as S from "./style";
import { InputBox, Button, AppLayout, logoImg } from "./index";
import authAPI from "../../utils/apis/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import storage from "../../utils/storage";
import useForm from "../../hooks/useForm";
// import { useUser } from "../../contexts/UserProvider";
const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  type error = {
    email?: string;
    password?: string;
  };

  const [errors, setErrors] = useState<error>({});
  // const { onSaveUserInfo } = useUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const isError = ({ email, password }) => {
    const errors: error = {};
    if (!email) errors.email = "이메일을 입력해주세요";
    // else if (!/^[A-za-z0-9]{5,15}$/g.test(email))
    //   errors.email = "이메일은 영문, 숫자";
    else if (!/^.+@.+\..+$/.test(email))
      errors.email = "올바른 이메일을 입력해주세요 ";

    if (!password) errors.password = "비밀번호를 입력해주세요";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authAPI
      .signIn({
        email: values.email,
        password: values.password
      })
      .then((res) => {
        const { user, token } = res.data;
        // onSaveUserInfo({ userData: user, token });
        storage.setItem("token", token);
        storage.setItem("_id", user._id);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          const newErrors = isError ? isError(values) : {};
          if (Object.keys(newErrors).length != 0) {
            setErrors(newErrors);
          } else {
            alert("이메일 또는 비밀번호를 확인해주세요");
            setValues({ email: "", password: "" });
          }
        }
      });
  };

  return (
    <AppLayout>
      <S.LogInWrapper>
        <S.Image src={logoImg} alt="로고" onClick={() => navigate("/")} />
        <S.H2>로그인</S.H2>
        <S.InputBox>
          <Label>이메일</Label>
          <Input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.email}</ErrorMessage>
        </S.InputBox>
        <S.InputBox>
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.password}</ErrorMessage>
        </S.InputBox>
        <Button onClick={handleSubmit}>로그인</Button>
      </S.LogInWrapper>
    </AppLayout>
  );
};
export default SignIn;
