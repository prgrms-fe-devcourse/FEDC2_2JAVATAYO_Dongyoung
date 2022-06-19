import * as S from "./style";
import { useState, useRef, useCallback } from "react";

interface TextareaInterface {
  isLogin: boolean;
  isIntroduction: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaInterface> = ({
  isLogin,
  isIntroduction,
  children,
  onChange
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [ContentValue, setContentValue] = useState(""); // 수정 페이지에서 불러올 value관리

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

  const placeholderText = isLogin
    ? isIntroduction
      ? "프로젝트를 자유롭게 소개해주세요!🙂"
      : "댓글을 남겨주세요.😀"
    : "로그인한 사용자만 작성할 수 있습니다.";
  return (
    <S.Textarea
      isIntroduction={isIntroduction}
      disabled={!isLogin}
      placeholder={placeholderText}
      onChange={children !== null ? onChange : null}
      onInput={isIntroduction ? handleResizeHeight : null}
      ref={isIntroduction ? ref : null}
    >
      {children}
    </S.Textarea>
  );
};

Textarea.defaultProps = {
  isLogin: false,
  isIntroduction: true
};

export default Textarea;
