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
  passwordConfirm?: string;
};
const useSignUp = ({ initialValues, isError }) => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<error>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const newErrors = isError(values);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      isChecked === false
        ? alert("닉네임 중복확인을 해주세요")
        : await authAPI
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
                alert("입력하신 정보를 확인해주세요");
                setValues({
                  fullName: "",
                  email: "",
                  password: "",
                  passwordConfirm: ""
                });
                setErrors({});
              }
            });
      setIsLoading(false);
    }
  };

  const handleDuplicate = async () => {
    const response = await userAPI.getUserList();
    const names = response.data.map((x) => x.fullName);
    if (Object.keys(newErrors).length === 0) {
      if (names.includes(values.fullName)) {
        setErrors({});
        setValues({ ...values, fullName: "" });
        alert("이미 있는 이름입니다.");
      } else {
        alert("사용가능한 이름입니다.");
        setIsChecked(true);
      }
    } else {
      alert("닉네임 외 정보를 확인해주세요");
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
