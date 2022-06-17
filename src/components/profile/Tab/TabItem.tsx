import React from "react";
import * as S from "./style";
export interface TabItemInterface {
  children: React.ReactNode;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const TabItem: React.FC<TabItemInterface> = ({
  title,
  active = false,
  onClick,
  ...props
}) => {
  return (
    <>
      <S.TabItem active={active} {...props} onClick={onClick ? onClick : null}>
        {title}
      </S.TabItem>
    </>
  );
};

export default TabItem;
