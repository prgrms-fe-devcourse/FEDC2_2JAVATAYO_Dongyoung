import { FC, useState } from "react";
import { ImageUpload } from "@components/common";
import { CoverImage } from "@components/profile";
import { useHover } from "@hooks";
import { userAPI } from "@utils/apis";
import * as S from "./style";

interface CoverImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
}

const CoverImageBox: FC<CoverImageBoxInterface> = ({ isMine, imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);
  const [ref, hover] = useHover<HTMLDivElement>();

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await userAPI.changeCoverImage(formData);

      setSrc(response.data.coverImage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.CoverImageWrapper ref={ref}>
      <CoverImage imgSrc={src} />
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
