import * as S from "./style";
interface ErrorMessageInterface {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({ errorMessage }) => {
  return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
};

export default ErrorMessage;
