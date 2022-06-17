import PartBox from "../PartBox/PartBox";
import * as S from "./style";

const PartBoxList = ({ parts, handleDeleteParts }) => {
  return (
    <S.PartBoxList>
      {parts.map((_part, index) => (
        <PartBox
          handleDelete={handleDeleteParts}
          key={index}
          id={index}
          initialChannel={_part.channel}
          initialPeople={_part.people}
          initialSkills={_part.skills}
        />
      ))}
    </S.PartBoxList>
  );
};
export default PartBoxList;
