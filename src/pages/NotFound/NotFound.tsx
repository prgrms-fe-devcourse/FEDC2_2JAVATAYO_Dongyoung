import React from "react";
import * as S from "./style";
import NotFoundImg from "@assets/imgs/404.gif";
import { Button } from "@components/common";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.NotFound>
      <img src={NotFoundImg} alt="페이지를 찾을 수 없습니다." />
      <div>
        <strong>404</strong>
        <Button buttonType="gray-line" onClick={() => navigate("/")}>
          👉 메인으로 돌아가기
        </Button>
      </div>
    </S.NotFound>
  );
};
export default NotFound;
