import * as S from "./style";
import TextareaBox from "./TextareaBox";
import Comment from "./Comment";

interface PostFooterInterface {
  comments: object[];
}

const PostFooter: React.FC<PostFooterInterface> = ({ comments }) => {
  let paramComment;
  let paramAuthor;
  let paramUpdatedAt;
  let paramKey;
  /* for (let i = 0; i < comments.length; i += 1) {
    let prop;
    for (prop in comments[i]) {
      if (Object.prototype.hasOwnProperty.call(comments[i], prop)) {
        console.log(comments[i][prop]);
      }
    }
  } */
  return (
    <S.PostFooter>
      <TextareaBox length={comments.length}></TextareaBox>
      <div>
        {comments.map((comment) => {
          let prop;
          for (prop in comment) {
            if (Object.prototype.hasOwnProperty.call(comment, prop)) {
              switch (prop) {
                case "comment":
                  paramComment = comment[prop];
                  break;
                case "author":
                  paramAuthor = comment[prop];
                  break;
                case "updatedAt":
                  paramUpdatedAt = comment[prop];
                  break;
                case "_id":
                  paramKey = comment[prop];
                  break;
                default:
                  break;
              }
            }
          }
          return (
            <Comment
              comment={paramComment}
              author={paramAuthor}
              updatedAt={paramUpdatedAt}
              key={paramKey}
            />
          );
        })}
      </div>
    </S.PostFooter>
  );
};

export default PostFooter;
