import { FC, useState } from "react";
import { ProfileImage, ImageUpload } from "@components/common";
import { FollowIcon } from "@components/profile";
import { ReactComponent as SettingComponent } from "@assets/icons/icon_setting.svg";
import { userAPI } from "@utils/apis";
import * as S from "./style";

interface ProfileImageBoxInterface {
  isMine: boolean;
  imgSrc: string;
  id: Id;
  profileFullName: string;
}

export type Id = {
  profile: string;
  visitor: string;
};

const ProfileImageBox: FC<ProfileImageBoxInterface> = ({
  isMine,
  imgSrc,
  id,
  profileFullName
}) => {
  const [src, setSrc] = useState(imgSrc);

  const handleImageUpload = async (file) => {
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
        <ImageUpload
          onImageUpload={handleImageUpload}
          replacement={<SettingComponent width="20px" height="20px" />}
          replacementStyle={{
            position: "absolute",
            bottom: "0",
            right: "-3px"
          }}
        />
      ) : null}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImageBox;
