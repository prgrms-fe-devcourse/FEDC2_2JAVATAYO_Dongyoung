import { FC, Fragment } from "react";
import useEditForm from "@hooks/useEditForm";
import { settingAPI } from "@utils/apis";
import { Button } from "@components/common";
import InputBox from "@components/common/InputBox/InputBox";
import * as S from "./style";

export const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;

type Values = {
  password: string;
  passwordConfirm: string;
};

const EditPassword: FC = () => {
  const { isLoading, errors, handleChange, handleSubmit } = useEditForm<Values>(
    {
      initialValue: {
        password: "",
        passwordConfirm: ""
      },
      onSubmit: (values: Values) => settingAPI.changePwd(values.password),
      validate: ({ password, passwordConfirm }) => {
        const errors = {};

        if (password === "") {
          errors["password"] = "비밀번호를 입력해주세요";
        } else if (!passwordRegExp.test(password)) {
          errors["password"] =
            "비밀번호는 숫자, 영문자로 이루어진 6~12자리여야 합니다";
        } else if (password !== passwordConfirm) {
          errors["passwordConfirm"] = "비밀번호가 일치하지 않습니다";
        }

        return errors;
      }
    }
  );

  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <S.Strong>비밀번호 변경</S.Strong>

        <S.FlexContainer>
          <InputBox
            name="password"
            label="새 비밀번호"
            errorMessage={errors["password"]}
            onChange={handleChange}
          />

          <InputBox
            name="passwordConfirm"
            label="새 비밀번호 확인"
            errorMessage={errors["passwordConfirm"]}
            onChange={handleChange}
          />
        </S.FlexContainer>

        <S.ButtonWrapper>
          <Button>변경하기</Button>
        </S.ButtonWrapper>
      </form>
    </Fragment>
  );
};

export default EditPassword;
