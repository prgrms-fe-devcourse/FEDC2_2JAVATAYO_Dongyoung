import * as S from "./style";
interface LabelInterface {
  label: string;
}

const Label: React.FC<LabelInterface> = ({ label }) => {
  return <S.Label>{label}</S.Label>;
};

export default Label;
