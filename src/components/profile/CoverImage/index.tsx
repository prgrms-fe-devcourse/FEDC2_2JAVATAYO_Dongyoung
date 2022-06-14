import * as S from "./style";
import defaultCoverImage from "../../../assets/imgs/profile_default_cover.png";

interface ICoverImage {
  imgSrc?: string;
  imgAlt?: string;
}

const CoverImage = ({ imgSrc, imgAlt = "" }: ICoverImage) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultCoverImage;
  };

  return (
    <S.CoverImage
      src={imgSrc ? imgSrc : defaultCoverImage}
      alt={imgAlt}
      onError={handleImgError}
    />
  );
};

export default CoverImage;
