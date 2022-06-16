import * as S from "./style";
import Button from "../../common/Button";

interface PostBodyInterface {
  introduction: string;
}

const PostBody: React.FC<PostBodyInterface> = ({ introduction }) => {
  return (
    <S.PostBody>
      {/* 추후 global font로 교체 예정 */}
      <S.Section>프로젝트 소개</S.Section>
      <hr color="#FFD613" />
      <S.IntroductionDiv>{introduction}</S.IntroductionDiv>
      <S.Wrapper>
        <Button buttonType="gray-line" width="100">
          수정
        </Button>
        <Button buttonType="gray-line" width="100">
          삭제
        </Button>
      </S.Wrapper>
    </S.PostBody>
  );
};

export default PostBody;
