import * as S from "./style";

interface InputInterface {
  type: string;
  width: number;
  label: string;
  placeholder: string;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputInterface> = ({
  type,
  width,
  label,
  placeholder,
  errorMessage,
  onChange,
  ...props
}) => {
  return (
    <S.Wrapper style={{ width }}>
      <S.Label>{label}</S.Label>
      <S.StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Wrapper>
  );
};

export default Input;
