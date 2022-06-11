import * as S from "./style";

interface InputInterface {
  type?: string;
  width?: number;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

const Input: React.FC<InputInterface> = ({
  type,
  width = 400,
  placeholder,
  value,
  onChange,
  name,
  ...props
}) => {
  return (
    <S.Input
      type={type ? type : "text"}
      style={{ width }}
      placeholder={placeholder ? placeholder : ""}
      value={value}
      onChange={onChange}
      name={name ? name : ""}
      {...props}
    />
  );
};

export default Input;
