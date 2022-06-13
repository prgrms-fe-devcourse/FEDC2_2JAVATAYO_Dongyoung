import { useHover } from "../../../hooks";
import * as S from "./style";

interface SkillIconInterface {
  name: string;
  alt: string;
}

const SkillIcon: React.FC<SkillIconInterface> = ({ name, alt = "" }) => {
  const [ref, hover] = useHover<HTMLDivElement>();

  let iconName = name;
  if (name === "RN") iconName = "rn";
  else if (name === "C/C++") iconName = "cpp";
  else iconName = convertPascalToSnake(name);

  return (
    <S.Container name={name.toLowerCase()} ref={ref}>
      <S.Img
        src={`${process.env.PUBLIC_URL}/assets/icons/icon_${iconName}.svg`}
        alt={alt}
        name={name.toLowerCase()}
      />
      {hover ? <S.ToolTip>{alt}</S.ToolTip> : null}
    </S.Container>
  );
};

export default SkillIcon;

const convertPascalToSnake = (pascalString: string) => {
  return pascalString
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .split(" ")
    .join("_");
};
