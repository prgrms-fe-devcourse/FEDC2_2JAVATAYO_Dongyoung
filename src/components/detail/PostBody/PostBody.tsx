import * as S from "./style";
import Button from "@components/common/Button";
import theme from "../../../styles/theme";
interface PostBodyInterface {
  introduction: string;
  postEdit: React.MouseEventHandler<HTMLButtonElement>;
  postDelete: React.MouseEventHandler<HTMLButtonElement>;
  imageSrc?: string;
  isAuthor: boolean;
}

const PostBody: React.FC<PostBodyInterface> = ({
  introduction,
  postEdit,
  postDelete,
  imageSrc,
  isAuthor
}) => {
  return (
    <S.PostBody>
      {/* 추후 global font로 교체 예정 */}
      <S.Section>프로젝트 소개</S.Section>
      <hr color={theme.$yellow} />
      <S.IntroductionDiv>{introduction}</S.IntroductionDiv>
      <S.ImageWrapper>
        <S.Image src={imageSrc} width="400px" />
      </S.ImageWrapper>
      {isAuthor ? (
        <S.Wrapper>
          <Button buttonType="gray-line" width="100" onClick={postEdit}>
            수정
          </Button>
          <Button buttonType="gray-line" width="100" onClick={postDelete}>
            삭제
          </Button>
        </S.Wrapper>
      ) : (
        <S.Wrapper></S.Wrapper>
      )}
    </S.PostBody>
  );
};

export default PostBody;
