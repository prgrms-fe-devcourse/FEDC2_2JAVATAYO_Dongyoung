import { useState } from "react";

type Form<T> = {
  initialValue: T;
  onSubmit: (args: T) => void;
  validate?: (values: T) => object;
};

const useForm = <T>({ initialValue, onSubmit, validate }: Form<T>) => {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch {
        alert("이메일이나 비밀번호를 확인해주세요");
      }
    }
    setErrors(newErrors);
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
