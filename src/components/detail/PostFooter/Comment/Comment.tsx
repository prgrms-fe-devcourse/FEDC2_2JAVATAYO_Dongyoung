import * as S from "./style";
import ProfileImage from "../../../common/ProfileImage";
import theme from "../../../../styles/theme";

interface CommentInterface {
  comment: string;
  author: string;
  updatedAt: string;
}

const deleteComment = () => {
  if (window.confirm("댓글을 삭제하시겠습니까?")) {
    alert("삭제 구현중!!");
  }
};

const Comment: React.FC<CommentInterface> = ({
  comment,
  author,
  updatedAt
}) => {
  return (
    <div>
      <S.FlexBetween>
        <S.CenterAlignItemSpan>
          <ProfileImage block={false} size="md" />
          <span>{author}</span>
        </S.CenterAlignItemSpan>
        <span style={{ color: theme.$gray400 }}>{updatedAt}</span>
      </S.FlexBetween>
      <S.CommentText>{comment}</S.CommentText>
      <S.DeleteCommetDiv>
        <span></span>
        <span
          onClick={deleteComment}
          style={{ textDecoration: "underline", color: theme.$gray600 }}
        >
          댓글삭제
        </span>
      </S.DeleteCommetDiv>
      <S.CommentHorizontalRule color={theme.$gray200} />
    </div>
  );
};

export default Comment;
