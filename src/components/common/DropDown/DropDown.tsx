import React, { useState } from "react";
import * as S from "./style";

type content = {
  label: string | React.ReactNode;
  event: () => void;
};
interface DropDownInterface {
  children: React.ReactNode;
  contents: content[];
  top?: number;
  left?: number;
}

const DropDown: React.FC<DropDownInterface> = ({
  children,
  contents,
  top = 50,
  left = 0
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <S.DropDown>
      <S.DropDownBtn onClick={() => setShowDropDown(!showDropDown)}>
        {children}
      </S.DropDownBtn>
      <S.DropBox showDropDown={showDropDown} top={top} left={left}>
        {contents.map((item, i) => (
          <button key={i} onClick={item.event}>
            {item.label}
          </button>
        ))}
      </S.DropBox>
    </S.DropDown>
  );
};

export default DropDown;
