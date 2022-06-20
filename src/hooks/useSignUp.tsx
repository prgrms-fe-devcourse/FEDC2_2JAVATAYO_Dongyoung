import { useState } from "react";
import { authAPI } from "../utils/apis";
import { userAPI } from "../utils/apis";
import storage from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
export type error = {
  fullName?: string;
  email?: string;
  password?: string;
  secondPwd?: string;
};
const useSignUp = ({ initialValues, isError }) => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<error>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors = isError(values);

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      await authAPI
        .signUp({
          email: values.email,
          fullName: values.fullName,
          password: values.password
        })
        .then((res) => {
          const { user, token } = res.data;
          onLogin(user);
          storage.setItem("TOKEN", token);
          navigate("/");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert("이메일 또는 비밀번호를 확인해주세요");
            setValues({ fullName: "", email: "", password: "", secondPwd: "" });
            setErrors({});
          }
        });
      setIsLoading(false);
    }
  };

  const handleDuplicate = async () => {
    const response = await userAPI.getUserList();
    const names = response.data.map((x) => x.fullName);
    if (names.includes(values.fullName)) {
      alert("이미 있는 이름입니다.");
      setValues({ fullName: "" });
    }
  };
  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    handleDuplicate
  };
};

export default useSignUp;
