import PartBox from "../PartBox/PartBox";
import * as S from "./style";

const PartBoxList = ({ parts }) => {
  //   const parts = [
  //     { channel: "front", people: "5", skills: [["html5"], ["next.js"]] },
  //     { channel: "back", people: 10, skills: [] }
  //   ];

  return (
    <S.PartBoxList>
      {parts.map((_part) => (
        <PartBox
          key={_part.channel}
          initialChannel={_part.channel}
          initialPeople={_part.people}
          initialSkills={_part.skills}
        />
      ))}
    </S.PartBoxList>
  );
};
export default PartBoxList;
