import * as S from "./style";
import Button from "../../../common/Button";
import Textarea from "../../../common/Textarea";
import commentAPI from "../../../../utils/apis/comment";
import { useState, useRef } from "react";
interface TextareaBoxInterface {
  length: number;
  postId: string;
  comments: object[];
  setComments: (value: object) => void;
  isLoggedIn: boolean;
  userId: string;
}

const TextareaBox: React.FC<TextareaBoxInterface> = ({
  length,
  postId,
  comments,
  setComments,
  isLoggedIn,
  userId
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
        await commentAPI.createComment({
          comment: commentText,
          postId: postId
        });
        setCommentText(() => "");
        setComments((comments) => [
          ...comments,
          {
            comment: commentText,
            post: postId,
            author: {
              _id: userId
            }
          }
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(comments);
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
