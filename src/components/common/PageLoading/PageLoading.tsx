import React from "react";
import pageLoading from "@assets/imgs/page_loading.gif";
import * as S from "./style";

type isLoadingInterface = {
  isLoading?: boolean;
};

const PageLoading: React.FC<isLoadingInterface> = ({ isLoading = true }) => {
  return (
    <div>
      {isLoading ? (
        <S.PageLoading>
          <img src={pageLoading} alt="로딩중" />
        </S.PageLoading>
      ) : null}
    </div>
  );
};

export default PageLoading;
