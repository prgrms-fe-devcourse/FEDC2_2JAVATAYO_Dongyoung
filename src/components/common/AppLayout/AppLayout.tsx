import * as S from "./style";

interface AppLayoutInterface {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutInterface> = ({ children }) => {
  // header, footer 컴포넌트 추가
  return <S.Layout>{children}</S.Layout>;
};

export default AppLayout;
