import defaultImg from "./defaultProfileImage.png";
import * as S from "./style";

interface ProfileImageInterface {
  block?: boolean;
  size?: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ProfileImage: React.FC<ProfileImageInterface> = ({
  block = true,
  size = "sm",
  imgSrc,
  imgAlt = "",
  onClick,
  ...props
}) => {
  if (!S.sizeMap[size]) {
    size = "sm";
    console.warn("size 값으로 sm | md | lg 값을 넘겨주세요");
  }

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <S.ImageContainer
      block={block}
      imgSize={S.sizeMap[size]}
      pointer={!!onClick}
      onClick={onClick ? onClick : undefined}
      {...props}
    >
      <S.Image
        src={imgSrc ? imgSrc : defaultImg}
        alt={imgAlt}
        onError={handleImgError}
      />
    </S.ImageContainer>
  );
};

export default ProfileImage;
