import { FC, useState } from "react";
import { ImageUpload } from "@components/common";
import { CoverImage, EditIcon } from "@components/profile";
import { userAPI } from "@utils/apis";
import * as S from "./style";

interface CoverImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
}

const CoverImageBox: FC<CoverImageBoxInterface> = ({ isMine, imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);

  const handleImageUpload = async (file) => {
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
    <S.CoverImageWrapper>
      <CoverImage imgSrc={src} />
      {isMine ? (
        <ImageUpload
          onImageUpload={handleImageUpload}
          replacement={<EditIcon bottom="9px" right="20%" />}
        />
      ) : null}
    </S.CoverImageWrapper>
  );
};

export default CoverImageBox;
