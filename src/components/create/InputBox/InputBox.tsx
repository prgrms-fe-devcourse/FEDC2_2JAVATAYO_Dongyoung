import * as S from "./style";
import Label from "../../common/Label";
import Input from "../../common/Input";
import ErrorMessage from "../../common/ErrorMessage";

interface InputBoxInterface {
  label?: string;
  errorMessage?: string;
  width?: number;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const InputBox: React.FC<InputBoxInterface> = ({
  label,
  width,
  placeholder,
  value,
  onChange,
  errorMessage
}) => {
  return (
    <S.InputBox style={{ width }}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputBox>
  );
};

export default InputBox;
