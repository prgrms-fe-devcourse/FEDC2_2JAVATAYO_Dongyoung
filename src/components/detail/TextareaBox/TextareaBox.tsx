import * as S from "./style";
import Button from "../../common/Button";
import Textarea from "../../common/Textarea";
import commentAPI from "../../../utils/apis/comment";
import notificationAPI from "../../../utils/apis/notification";
import { useState, useRef } from "react";
interface TextareaBoxInterface {
  length: number;
  postId: string;
  comments: object[];
  setComments: (value: object) => void;
  isLoggedIn: boolean;
  userId: string;
  userName: string;
  userImage: string;
  postAuthorId: string;
}

const TextareaBox: React.FC<TextareaBoxInterface> = ({
  length,
  postId,
  comments,
  setComments,
  isLoggedIn,
  userId,
  userName,
  userImage,
  postAuthorId
}) => {
  //const isLoggedIn = true; // 추후 Context API로 변경
  const [commentText, setCommentText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const onCommentChange = (event) => {
    setCommentText(event.currentTarget.value);
  };

  const createComment = async (event) => {
    if (commentText.length === 0) {
      textAreaRef.current.focus();
      return;
    }
    if (confirm("댓글을 등록하시겠습니까?")) {
      try {
        const createCommentRespon = await commentAPI.createComment({
          comment: commentText,
          postId: postId
        });
        const { _id } = createCommentRespon.data;
        const now = new Date();
        const today =
          now.getFullYear() + "." + (now.getMonth() + 1) + "." + now.getDate();
        setComments((comments) => [
          ...comments,
          {
            _id: _id,
            comment: commentText,
            post: postId,
            author: {
              _id: userId,
              fullName: userName,
              image: userImage
            },
            createdAt: today,
            updatedAt: today
          }
        ]);
        await notificationAPI.createNotification({
          notificationType: "COMMENT",
          notificationTypeId: _id,
          userId: postAuthorId,
          postId: postId
        });
        textAreaRef.current.value = "";
      } catch (error) {
        console.error(error);
      }
      //location.reload();
    }
    //console.log(comments);
  };

  return (
    <div>
      <S.Section>{length}개의 댓글이 있습니다.</S.Section>
      <hr color="#FFD613" />
      <div>
        <S.Textarea>
          <Textarea
            isIntroduction={false}
            isLogin={isLoggedIn}
            onChange={onCommentChange}
            textAreaRef={textAreaRef}
          ></Textarea>
        </S.Textarea>
        <S.SubmitDiv>
          <div></div>
          <Button
            buttonType={isLoggedIn ? "blue" : "gray"}
            isRound={true}
            width="200"
            onClick={createComment}
            isDisabled={!isLoggedIn}
          >
            댓글 등록
          </Button>
        </S.SubmitDiv>
      </div>
    </div>
  );
};

export default TextareaBox;
