import Footer from "../Footer";
import Header from "../Header";
import * as S from "./style";

interface AppLayoutInterface {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutInterface> = ({ children }) => {
  // header, footer 컴포넌트 추가
  return (
    <div>
      <Header />
      <S.Layout>{children}</S.Layout>
      <Footer />
    </div>
  );
};

export default AppLayout;
