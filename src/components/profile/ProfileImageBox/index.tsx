import { FC, useState } from "react";
import { ProfileImage, ImageUpload } from "@components/common";
import { EditIcon } from "@components/profile";
import * as S from "./style";
import { userAPI } from "@utils/apis";

interface ProfileImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
}

const ProfileImageBox: FC<ProfileImageBoxInterface> = ({ isMine, imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    // try {
    //   const response = await userAPI.changeProfileImage(formData);

    //   console.log(response.data);
    //   setSrc(response.data.image);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <S.ProfileImageWrapper>
      <ProfileImage imgSrc={src} size="lg" />
      {isMine ? (
        <ImageUpload
          onImageUpload={handleImageUpload}
          replacement={<EditIcon right="-3px" />}
        />
      ) : null}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImageBox;