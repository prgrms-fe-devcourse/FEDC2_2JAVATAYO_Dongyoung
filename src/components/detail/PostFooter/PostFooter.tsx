import * as S from "./style";
import TextareaBox from "./TextareaBox";
import Comment from "./Comment";
import { useEffect, useState } from "react";

interface PostFooterInterface {
  comments: object[];
  postId: string;
  userId: string;
  isLoggedIn: boolean;
  setComments: (value: object) => void;
  deleteComment: (value: object, id: string) => void;
}

const PostFooter: React.FC<PostFooterInterface> = ({
  comments,
  postId,
  userId,
  isLoggedIn,
  setComments,
  deleteComment
}) => {
  let paramComment;
  let paramAuthor;
  let paramAuthorId;
  let paramUpdatedAt;
  let paramKey;

  return (
    <S.PostFooter>
      <TextareaBox
        length={comments.length}
        postId={postId}
        comments={comments}
        setComments={setComments}
        isLoggedIn={isLoggedIn}
        userId={userId}
      ></TextareaBox>
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
                  paramAuthor = comment[prop].fullName;
                  paramAuthorId = comment[prop]._id;
                  break;
                case "updatedAt":
                  paramUpdatedAt = comment[prop]
                    .substring(0, 10)
                    .replaceAll("-", ".");
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
              key={paramKey}
              userId={userId}
              authorId={paramAuthorId}
              commentId={paramKey}
              comment={paramComment}
              author={paramAuthor}
              updatedAt={paramUpdatedAt}
              deleteComment={deleteComment}
              comments={comments}
            />
          );
        })}
      </div>
    </S.PostFooter>
  );
};

export default PostFooter;
