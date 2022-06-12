import * as S from "./style";
import { useRef, useCallback } from "react";

interface TextareaInterface {
  isLogin: boolean;
  textareaType: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaInterface> = (props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (
      ref === null ||
      ref.current === null ||
      ref.current.scrollHeight <= 420
    ) {
      return;
    }

    // textarea 높이가 420px보다 작을 경우 최소 크기(420px)로 초기화
    ref.current.style.height = "420px";

    ref.current.style.height = ref.current.scrollHeight - 20 + "px";
  }, []);

  const textareaType = props.textareaType;

  const placeholderText = props.isLogin
    ? textareaType === "comment"
      ? "댓글을 남겨주세요.😀"
      : "프로젝트를 자유롭게 소개해주세요!🙂"
    : "로그인한 사용자만 작성할 수 있습니다.";
  return (
    <S.Textarea
      disabled={!props.isLogin}
      textareaType={textareaType}
      placeholder={placeholderText}
      onChange={textareaType === "comment" ? null : props.onChange}
      onInput={textareaType === "comment" ? null : handleResizeHeight}
      ref={textareaType === "comment" ? null : ref}
    ></S.Textarea>
  );
};

Textarea.defaultProps = {
  isLogin: false,
  textareaType: "comment"
};

export default Textarea;
