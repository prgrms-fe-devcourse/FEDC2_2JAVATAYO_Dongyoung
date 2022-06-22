import { useState } from "react";
import { AxiosResponse } from "axios";

type EditForm<T> = {
  initialValue: T;
  onSubmit: (args: T) => Promise<AxiosResponse>;
  validate?: (values: T) => object;
};

const useEditForm = <T>({ initialValue, onSubmit, validate }: EditForm<T>) => {
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
      await onSubmit(values);
      setValues(initialValue);
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

export default useEditForm;
