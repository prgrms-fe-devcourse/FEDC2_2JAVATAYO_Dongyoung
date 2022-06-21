import { FC, useState } from "react";
import { ImageUpload } from "@components/common";
import { CoverImage } from "@components/profile";
import { useHover } from "@hooks";
import { userAPI } from "@utils/apis";
import * as S from "./style";

interface CoverImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
  handleImageUpload: (file: File) => void;
}

const CoverImageBox: FC<CoverImageBoxInterface> = ({
  isMine,
  imgSrc,
  handleImageUpload
}) => {
  const [ref, hover] = useHover<HTMLDivElement>();

  return (
    <S.CoverImageWrapper ref={ref}>
      <CoverImage imgSrc={imgSrc} />
      {isMine && hover ? (
        <ImageUpload
          onImageUpload={handleImageUpload}
          replacement={<S.Replacement>커버 변경</S.Replacement>}
          replacementStyle={{
            position: "absolute",
            bottom: "12px",
            right: "25%"
          }}
        />
      ) : null}
    </S.CoverImageWrapper>
  );
};

export default CoverImageBox;
