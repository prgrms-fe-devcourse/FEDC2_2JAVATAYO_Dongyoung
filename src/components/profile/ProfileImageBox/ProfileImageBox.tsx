import { FC, useState } from "react";
import { ProfileImage } from "@components/common";
import SettingDropDown from "../SettingDropDown";
import { userAPI } from "@utils/apis";
import * as S from "./style";

interface ProfileImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
}

const ProfileImageBox: FC<ProfileImageBoxInterface> = ({ isMine, imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await userAPI.changeProfileImage(formData);

      setSrc(response.data.image);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.ProfileImageWrapper>
      <ProfileImage imgSrc={src} size="lg" />
      {isMine ? (
        <SettingDropDown handleImageUpload={handleImageUpload} />
      ) : null}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImageBox;
