import * as S from "./style";
interface LabelInterface {
  children: React.ReactNode;
}

const Label: React.FC<LabelInterface> = ({ children }) => {
  return <S.Label>{children}</S.Label>;
};

export default Label;
