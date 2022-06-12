import * as S from "./style";
interface ErrorMessageInterface {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({ children }) => {
  return <S.ErrorMessage>{children}</S.ErrorMessage>;
};

export default ErrorMessage;
