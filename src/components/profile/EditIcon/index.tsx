import { ReactComponent as EditComponent } from "@assets/icons/icon_edit.svg";
import * as S from "./style";

interface EditIconInterface {
  bottom?: string;
  right?: string;
}

const EditIcon: React.FC<EditIconInterface> = ({
  bottom = "0",
  right = "0"
}) => {
  return (
    <S.EditWrapper bottom={bottom} right={right}>
      <EditComponent width="16px" height="16px" />
    </S.EditWrapper>
  );
};

export default EditIcon;
