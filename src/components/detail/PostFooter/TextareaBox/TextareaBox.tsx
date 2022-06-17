import * as S from "./style";
import Button from "../../../common/Button";
import Textarea from "../../../common/Textarea";

interface TextareaBoxInterface {
  length: number;
}

const TextareaBox: React.FC<TextareaBoxInterface> = ({ length }) => {
  return (
    <div>
      <S.Section>{length}개의 댓글이 있습니다.</S.Section>
      <hr color="#FFD613" />
      <S.Textarea>
        <Textarea isIntroduction={false} isLogin={true}></Textarea>
      </S.Textarea>
      <S.SubmitDiv>
        <div></div>
        <Button buttonType="blue" isRound={true} width="200">
          댓글 등록
        </Button>
      </S.SubmitDiv>
    </div>
  );
};

export default TextareaBox;
