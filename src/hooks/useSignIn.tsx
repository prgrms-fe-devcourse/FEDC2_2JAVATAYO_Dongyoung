import { useState } from "react";
import { authAPI } from "../utils/apis";
import storage from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
const useForm = ({ initialValues, isError }) => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  type error = {
    email?: string;
    password?: string;
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<error>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    await authAPI
      .signIn({
        email: values.email,
        password: values.password
      })
      .then((res) => {
        const { user, token } = res.data;
        onLogin(user);
        storage.setItem("TOKEN", token);
        storage.setItem("_ID", user._id);
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
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  };
};

export default useForm;
