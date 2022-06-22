import { FC, useState, useRef } from "react";
import { ImageUpload, DropDown } from "@components/common";
import { EditFullName, EditPassword, Modal } from "@components/profile";
import { ReactComponent as SettingComponent } from "@assets/icons/icon_setting.svg";
import * as S from "./style";
import theme from "../../../styles/theme";

interface SettingDropDownInterface {
  handleImageUpload: (file: File) => void;
}

const SettingDropDown: FC<SettingDropDownInterface> = ({
  handleImageUpload
}) => {
  const [editFullNameVisible, setEditFullNameVisible] = useState(false);
  const [editPasswordVisible, setEditPasswordVisible] = useState(false);

  const refImageUpload = useRef(null);

  const dropDownContents = [
    {
      label: <S.DropBox>프로필 이미지 변경</S.DropBox>,
      event: () => {
        refImageUpload.current.click();
      }
    },
    {
      label: <S.DropBox>닉네임 변경</S.DropBox>,
      event: () => setEditFullNameVisible(true)
    },
    {
      label: <S.DropBox>비밀번호 변경</S.DropBox>,
      event: () => setEditPasswordVisible(true)
    }
  ];

  return (
    <div>
      <DropDown contents={dropDownContents} top={10} left={-32}>
        <S.Wrapper>
          <SettingComponent width="20px" height="20px" color={theme.$gray800} />
        </S.Wrapper>
      </DropDown>
      <div>
        <ImageUpload
          onImageUpload={handleImageUpload}
          replacement={<div ref={refImageUpload}></div>}
        />

        <Modal
          height="294px"
          visible={editFullNameVisible}
          onClose={() => setEditFullNameVisible(false)}
        >
          <EditFullName onModalClose={() => setEditFullNameVisible(false)} />
        </Modal>

        <Modal
          height="384px"
          visible={editPasswordVisible}
          onClose={() => setEditPasswordVisible(false)}
        >
          <EditPassword />
        </Modal>
      </div>
    </div>
  );
};

export default SettingDropDown;
