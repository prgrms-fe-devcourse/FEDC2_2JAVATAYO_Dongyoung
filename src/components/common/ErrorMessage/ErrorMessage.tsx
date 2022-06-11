import * as S from "./style";
interface InputInterface {
  errorMessage?: string;
}

const ErrorMessage: React.FC<InputInterface> = ({ errorMessage }) => {
  return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
};

export default ErrorMessage;
