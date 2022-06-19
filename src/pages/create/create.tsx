import { useEffect, useState } from "react";
import SelectBox from "@components/create/SelectBox";
import DatePicker from "@components/create/DatePicker";
import Label from "@components/common/Label";
import AppLayout from "@components/common/AppLayout";
import Button from "@components/common/Button";
import * as S from "./style";
import InputBox from "@components/create/InputBox/InputBox";
import Textarea from "@components/common/Textarea";
import { usePrompt } from "../../routes/Blocker";
import ImageUploader from "@components/create/ImageUploader/ImageUploader";
import PartBoxList from "@components/create/PartBoxList";
import { ErrorMessage } from "@components/common";
import { Input } from "antd";
import Select from "@components/create/Select";

const placeOptions = [
  { id: 1, value: "online", label: "온라인" },
  { id: 2, value: "offline", label: "오프라인" },
  { id: 3, value: "both", label: "온오프라인 병행" },
  { id: 4, value: "notyet", label: "미정" }
];

const expectedDateOptions = [
  { id: 1, value: "1개월", label: "1개월" },
  { id: 2, value: "2개월", label: "2개월" },
  { id: 3, value: "3개월", label: "3개월" },
  { id: 4, value: "4개월", label: "4개월" },
  { id: 5, value: "5개월", label: "5개월" },
  { id: 6, value: "6개월 이상", label: "6개월 이상" },
  { id: 7, value: "notyet", label: "미정" }
];

const Create: React.FC = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("online");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [parts, setParts] = useState([
    { channel: "front", people: "1", skills: [] }
  ]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCreate = () => {
    if (title === "") {
      setErrorMessage("제목을 입력해주세요");
      return;
    } else if (email === "") {
      setErrorMessage("이메일을 입력해주세요");
      return;
    }
  };

  usePrompt("현재 페이지를 벗어나시겠습니까? ", true);
  useEffect(() => {
    console.log("title", title);
    console.log("email", email);
    console.log("place", place);
    console.log("startDate", startDate);
    console.log("expectedDate", expectedDate);
    console.log("introduction", introduction);
    console.log("parts", parts);
  }, [title, email, place, startDate, expectedDate, introduction, parts]);

  const handleAddParts = () => {
    const newParts = [...parts, { channel: "front", people: "1", skills: [] }];
    setParts(newParts);
  };

  const handleDeleteParts = (id) => {
    const newParts = parts.filter((_, idx) => idx !== id);
    setParts(newParts);
  };

  const handleUpdateParts = (id, part) => {
    setParts(parts.map((_part, idx) => (idx === id ? { ...part } : _part)));
  };
  return (
    <AppLayout>
      <div>
        <Label>제목</Label>
        <Input
          aria-label="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <S.Wrapper>
        <S.InnerWrapper>
          <SelectBox
            label={"진행방식"}
            defaultValue={"온라인"}
            options={placeOptions}
            canAllowClear={false}
            setSelectedValue={setPlace}
          />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <Label>이메일</Label>
          <Input
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InnerWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.InnerWrapper>
          <Label> 시작일</Label>
          <DatePicker setSelectedValue={setStartDate} />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <Label>예상기간</Label>
          <Select
            disabled={false}
            defaultValue={"1개월"}
            options={expectedDateOptions}
            canAllowClear={false}
            setSelectedValue={setExpectedDate}
          />
        </S.InnerWrapper>
      </S.Wrapper>
      <h3>모집 분야</h3>
      <PartBoxList
        disabled={false}
        parts={parts}
        handleUpdateParts={handleUpdateParts}
        handleDeleteParts={handleDeleteParts}
      />
      <Button onClick={handleAddParts}>모집분야 추가</Button>
      <h3 style={{ margin: "20px 0" }}>프로젝트 소개</h3>
      <Textarea
        isIntroduction={true}
        isLogin={true}
        onChange={(e) => setIntroduction(e.target.value)}
      >
        {introduction}
      </Textarea>
      <Button isRound={true} width="300" onClick={handleCreate}>
        생성하기
      </Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ImageUploader />
    </AppLayout>
  );
};
export default Create;
