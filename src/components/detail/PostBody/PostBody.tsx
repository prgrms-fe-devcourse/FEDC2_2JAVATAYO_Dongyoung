import * as S from "./style";
import Button from "../../common/Button";
import theme from "../../../styles/theme";
interface PostBodyInterface {
  introduction: string;
  postEdit: React.MouseEventHandler<HTMLButtonElement>;
}

const PostBody: React.FC<PostBodyInterface> = ({ introduction, postEdit }) => {
  const isAuthor = true; // 추후 Context API로 구현
  return (
    <S.PostBody>
      {/* 추후 global font로 교체 예정 */}
      <S.Section>프로젝트 소개</S.Section>
      <hr color={theme.$yellow} />
      <S.IntroductionDiv>{introduction}</S.IntroductionDiv>
      {isAuthor ? (
        <S.Wrapper>
          <Button buttonType="gray-line" width="100" onClick={postEdit}>
            수정
          </Button>
          <Button buttonType="gray-line" width="100">
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
