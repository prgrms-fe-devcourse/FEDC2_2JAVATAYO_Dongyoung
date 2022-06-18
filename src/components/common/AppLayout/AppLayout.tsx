import Footer from "../Footer";
import Header from "../Header";
import React from "react";
import * as S from "./style";

interface AppLayoutInterface {
  children: React.ReactNode;
  banner?: boolean;
}

const AppLayout: React.FC<AppLayoutInterface> = ({ children, banner }) => {
  // header, footer 컴포넌트 추가
  return (
    <div>
      <Header />
      <S.Layout>{children}</S.Layout>
      <Footer banner={banner} />
    </div>
  );
};

export default AppLayout;
