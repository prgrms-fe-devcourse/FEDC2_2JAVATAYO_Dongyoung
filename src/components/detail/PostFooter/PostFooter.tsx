import * as S from "./style";
import TextareaBox from "./TextareaBox";
import Comment from "./Comment";
import { useEffect, useState } from "react";

interface PostFooterInterface {
  comments: object[];
  postId: string;
  userId: string;
  userName: string;
  userImage: string;
  postAuthorId: string;
  isLoggedIn: boolean;
  setComments: (value: object) => void;
  deleteComment: (value: object, id: string) => void;
}

const PostFooter: React.FC<PostFooterInterface> = ({
  comments,
  postId,
  userId,
  userName,
  userImage,
  postAuthorId,
  isLoggedIn,
  setComments,
  deleteComment
}) => {
  let paramComment;
  let paramAuthor;
  let paramAuthorId;
  let paramAuthorImage;
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
        userName={userName}
        userImage={userImage}
        postAuthorId={postAuthorId}
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
                  paramAuthorImage = comment[prop].image;
                  break;
                case "updatedAt":
                  paramUpdatedAt = new Date(comment[prop])
                    .toLocaleDateString()
                    .replaceAll(" ", "")
                    .substring(0, 9);
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
              authorImage={paramAuthorImage}
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
