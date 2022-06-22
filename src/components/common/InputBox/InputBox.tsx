import * as S from "./style";
import { Label, Input, ErrorMessage } from "@components/common";
interface InputBoxInterface {
  name?: string;
  type?: string;
  label?: string;
  errorMessage?: string;
  width?: number;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const InputBox: React.FC<InputBoxInterface> = ({
  name,
  label,
  type,
  width,
  placeholder,
  value,
  onChange,
  errorMessage
}) => {
  return (
    <S.InputBox style={{ width }}>
      <Label>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputBox>
  );
};

export default InputBox;
