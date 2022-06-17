import React, { ReactElement, useMemo, useState } from "react";
import TabItem, { TabItemInterface } from "./TabItem";
import * as S from "./style";

interface TabInterface {
  children: React.ReactNode;
  active?: number;
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
    <div>
      <S.TabWrapper>{tabItemList}</S.TabWrapper>
      <div>{activeTabItem.props.children}</div>
    </div>
  );
};

Tab.Item = TabItem;
export default Tab;