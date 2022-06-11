import { useState } from "react";
import * as S from "./style";

interface SkillIconInterface {
  name: string;
  alt: string;
}

const SkillIcon: React.FC<SkillIconInterface> = ({ name, alt = "" }) => {
  const [state, setState] = useState(false);
  const iconName = name === "RN" ? "rn" : convertPascalToSnake(name);

  return (
    <S.Container
      name={name.toLowerCase()}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <S.Img
        src={`${process.env.PUBLIC_URL}/assets/icons/icon_${iconName}.svg`}
        alt={alt}
        name={name.toLowerCase()}
      />
      {state ? <S.ToolTip>{alt}</S.ToolTip> : undefined}
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
