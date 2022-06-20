import React, { CSSProperties, ReactElement, useMemo, useState } from "react";
import TabItem, { TabItemInterface } from "./TabItem";
import * as S from "./style";

interface TabInterface {
  children: React.ReactNode;
  active?: number;
  style?: CSSProperties;
}

type TabCompositionType = {
  Item: typeof TabItem;
};

const Tab: React.FC<TabInterface> & TabCompositionType = ({
  children,
  active,
  ...props
}) => {
  const [currentActive, setCurrentActive] = useState(active ? active : 0);

  const tabItemList = useMemo(() => {
    return React.Children.toArray(children).map(
      (tabItem: ReactElement<TabItemInterface>, index) => {
        return React.cloneElement(tabItem, {
          ...tabItem.props,
          key: index,
          active: index === currentActive,
          onClick: () => {
            setCurrentActive(index);
          }
        });
      }
    );
  }, [children, currentActive]);

  const activeTabItem = useMemo(
    () => tabItemList[currentActive],
    [currentActive, tabItemList]
  );

  return (
    <>
      <S.TabWrapper style={{ ...props.style }}>{tabItemList}</S.TabWrapper>
      <div style={{ width: "100%" }}>{activeTabItem.props.children}</div>
    </>
  );
};

Tab.Item = TabItem;
export default Tab;
