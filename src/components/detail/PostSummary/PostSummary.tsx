import * as S from "./style";
import SkillIcon from "@components/common/SkillIcon";
interface PostSummaryInterface {
  channel: string;
  email: string;
  place: string;
  people: string;
  startDate: string;
  expectedDate: string;
  [skills: string]: any;
}

const PostSummary: React.FC<PostSummaryInterface> = ({
  channel,
  email,
  place,
  people,
  startDate,
  expectedDate,
  skills
}) => {
  return (
    <S.PostSummary>
      <colgroup>
        <col style={{ width: "25%" }} />
        <col style={{ width: "75%" }} />
      </colgroup>
      <tr>
        <td>모집분야</td>
        <td>{channel}</td>
      </tr>
      <tr>
        <td>모집인원</td>
        <td>{people}</td>
      </tr>
      <tr>
        <td>연락 방법</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>진행 방식</td>
        <td>{place}</td>
      </tr>
      <tr>
        <td>시작 예정</td>
        <td>{startDate}</td>
      </tr>
      <tr>
        <td>예상 기간</td>
        <td>{expectedDate}</td>
      </tr>
      <tr>
        <td style={{ verticalAlign: "middle" }}>기술 스택</td>
        {/* <td>{skills}</td> */}
        <td>
          <S.FlexBetween>
            {skills &&
              skills.map((skill) => {
                return <SkillIcon key="" name={skill.toString()} alt={skill} />;
              })}
          </S.FlexBetween>
        </td>
      </tr>
    </S.PostSummary>
  );
};

export default PostSummary;
