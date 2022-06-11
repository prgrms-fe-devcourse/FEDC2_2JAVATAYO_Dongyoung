import * as S from "./style";
interface InputInterface {
  label: string;
}

const Label: React.FC<InputInterface> = ({ label }) => {
  return <S.Label>{label}</S.Label>;
};

export default Label;
