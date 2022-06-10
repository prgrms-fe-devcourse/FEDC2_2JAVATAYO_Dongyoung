import styled from "@emotion/styled";
import defaultImg from "./defaultProfileImage.png";

interface ProfileImageInterface {
  block?: boolean;
  size?: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const sizeMap = {
  sm: 36,
  md: 40,
  lg: 80
};

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileImage: React.FC<ProfileImageInterface> = ({
  block = true,
  size = "sm",
  imgSrc,
  imgAlt = "",
  onClick,
  ...props
}) => {
  if (!sizeMap[size]) {
    size = "sm";
    console.warn("size 값으로 sm | md | lg 값을 넘겨주세요");
  }

  const ImageContainer = styled.div`
    display: ${block ? "block" : "inline-block"};
    width: ${sizeMap[size]}px;
    height: ${sizeMap[size]}px;
    border-radius: 50%;
    overflow: hidden;
    cursor: ${onClick ? "pointer" : "default"};
  `;

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <ImageContainer onClick={onClick ? onClick : undefined} {...props}>
      <Image
        src={imgSrc ? imgSrc : defaultImg}
        alt={imgAlt}
        onError={handleImgError}
      />
    </ImageContainer>
  );
};

export default ProfileImage;
