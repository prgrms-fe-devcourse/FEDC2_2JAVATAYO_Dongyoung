import PartBox from "../PartBox/PartBox";
import * as S from "./style";

const PartBoxList = ({
  handleUpdateParts,
  disabled,
  parts,
  handleDeleteParts
}) => {
  return (
    <S.PartBoxList>
      {parts.map((_part, index) => (
        <PartBox
          disabled={disabled}
          handleUpdate={(part) => handleUpdateParts(index, part)}
          handleDelete={() => handleDeleteParts(index)}
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
