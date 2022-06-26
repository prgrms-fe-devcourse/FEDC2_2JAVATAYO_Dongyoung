import * as S from "./style";
import ProfileImage from "@components/common/ProfileImage";
import theme from "../../../styles/theme";
import { useNavigate } from "react-router-dom";
interface CommentInterface {
  key: string;
  commentId: string;
  comment: string;
  userId: string;
  comments: object[];
  author: string;
  authorId: string;
  authorImage: string;
  updatedAt: string;
  deleteComment: (value: object, id: string) => void;
}

const Comment: React.FC<CommentInterface> = ({
  commentId,
  comment,
  userId,
  author,
  authorId,
  authorImage,
  updatedAt,
  deleteComment
}) => {
  const userProfileNavigate = useNavigate();
  const userProfileClick = () => {
    userProfileNavigate(`/profile/${authorId}`);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <S.FlexBetween>
        <S.CenterAlignItemSpan>
          <ProfileImage
            size="sm"
            imgAlt={author ? author : null}
            imgSrc={authorImage ? authorImage : null}
            onClick={userProfileClick}
          />
          <span>{author}</span>
        </S.CenterAlignItemSpan>
        <span style={{ color: theme.$gray400 }}>{updatedAt}</span>
      </S.FlexBetween>
      <S.CommentText>{comment}</S.CommentText>
      <S.DeleteCommetDiv>
        <span></span>
        {userId === authorId ? (
          <span
            onClick={(e) => deleteComment(e, commentId)}
            style={{
              height: "14px",
              textDecoration: "underline",
              color: theme.$gray600
            }}
          >
            댓글삭제
          </span>
        ) : (
          <span style={{ height: "14px" }}></span>
        )}
      </S.DeleteCommetDiv>
      <S.CommentHorizontalRule color={theme.$gray200} />
    </div>
  );
};

export default Comment;
