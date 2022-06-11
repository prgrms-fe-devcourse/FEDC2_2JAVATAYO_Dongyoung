import * as S from "./style";

interface InputInterface {
  type?: string;
  width: number;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputInterface> = ({
  type,
  width,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <S.Input
      type={type}
      style={{ width }}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
