import { FC, Fragment, useState, SetStateAction, Dispatch } from "react";
import Button from "@components/common/Button";
import InputBox from "@components/create/InputBox/InputBox";
import { searchAPI, settingAPI } from "@utils/apis";
import { IUser } from "src/types/model";
import { useAuth } from "@contexts/AuthProvider";
import * as S from "./style";

const isValidFullName = (fullName: string) => {
  return /^[가-힣|a-z|A-Z|\d]{2,8}$/.test(fullName);
};

interface EditFullNameInterface {
  onModalClose: () => void;
}

const EditFullName: FC<EditFullNameInterface> = ({ onModalClose }) => {
  const [fullName, setFullName] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [canChange, setCanChange] = useState(false);

  const { onUpdate } = useAuth();

  const handleChange = (e) => {
    setFullName(e.target.value);
    setErrorText("");
    setIsChecked(false);
    setCanChange(false);
  };

  const handleCheck = async () => {
    if (isChecked) return;

    if (!isValidFullName(fullName)) {
      setErrorText("2~8자 한글/영문/숫자 형식이 아닙니다");
      return;
    }

    try {
      setIsChecked(true);
      const response = await searchAPI.searchUsers(fullName);

      const existFullName = !response.data.some(
        (user: IUser) => user.fullName === fullName
      );
      if (existFullName) {
        setCanChange(true);
      } else {
        setErrorText("중복된 닉네임입니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    await settingAPI.changeInfo({
      fullName,
      userName: fullName
    });

    onUpdate({ fullName });
    setFullName("");

    alert("닉네임이 변경되었습니다");
    onModalClose();
  };

  return (
    <Fragment>
      <S.Strong>닉네임 변경</S.Strong>
      <div style={{ display: "flex", gap: "10px" }}>
        <InputBox
          width={246}
          label="닉네임"
          value={fullName}
          onChange={handleChange}
          placeholder="2~8자 한글/영문/숫자"
          errorMessage={errorText}
        />

        <div style={{ height: "64px", paddingTop: "22px" }}>
          <Button buttonType="red-line" width="124" onClick={handleCheck}>
            중복 확인
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "34px" }}>
        <Button
          buttonType={!canChange ? "gray" : "red"}
          isDisabled={!canChange}
          width="381"
          onClick={handleSubmit}
        >
          변경하기
        </Button>
      </div>
    </Fragment>
  );
};

export default EditFullName;
