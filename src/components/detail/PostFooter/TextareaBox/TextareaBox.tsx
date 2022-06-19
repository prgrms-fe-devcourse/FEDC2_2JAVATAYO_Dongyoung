import * as S from "./style";
import Button from "../../../common/Button";
import Textarea from "../../../common/Textarea";
import commentAPI from "../../../../utils/apis/comment";
import { useState } from "react";
import { render } from "@testing-library/react";
interface TextareaBoxInterface {
  length: number;
  postId: string;
  comments: object[];
  setComments: (value: object) => void;
}

const TextareaBox: React.FC<TextareaBoxInterface> = ({
  length,
  postId,
  comments,
  setComments
}) => {
  const isLoggedIn = true; // 추후 Context API로 변경
  const [commentText, setCommentText] = useState("");
  const onCommentChange = (event) => {
    setCommentText(event.currentTarget.value);
  };

  const createComment = async (event) => {
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
            post: postId
          }
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <S.Section>{length}개의 댓글이 있습니다.</S.Section>
      <hr color="#FFD613" />
      {isLoggedIn ? (
        <div>
          <S.Textarea>
            <Textarea
              isIntroduction={false}
              isLogin={true}
              onChange={onCommentChange}
            ></Textarea>
          </S.Textarea>
          <S.SubmitDiv>
            <div></div>
            <Button
              buttonType="blue"
              isRound={true}
              width="200"
              onClick={createComment}
            >
              댓글 등록
            </Button>
          </S.SubmitDiv>
        </div>
      ) : (
        <div></div>
      )}
      {/* <S.Textarea>
        <Textarea isIntroduction={false} isLogin={true}></Textarea>
      </S.Textarea>
      <S.SubmitDiv>
        <div></div>
        <Button buttonType="blue" isRound={true} width="200">
          댓글 등록
        </Button>
      </S.SubmitDiv> */}
    </div>
  );
};

export default TextareaBox;
