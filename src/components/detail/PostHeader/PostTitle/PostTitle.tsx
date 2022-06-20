import * as S from "./style";

interface PostTitleInterface {
  children: React.ReactNode;
}

const PostTitle: React.FC<PostTitleInterface> = ({ children }) => {
  return <S.PostTitle>{children}</S.PostTitle>;
};

export default PostTitle;
