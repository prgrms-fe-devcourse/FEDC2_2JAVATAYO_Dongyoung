import { useEffect, useState } from "react";
import SelectBox from "../../components/create/SelectBox";
import DatePicker from "../../components/create/DatePicker";
import PartBox from "../../components/create/PartBox";
import Label from "../../components/common/Label";
import AppLayout from "../../components/common/AppLayout";
import Button from "../../components/common/Button";
import * as S from "./style";
import InputBox from "@components/create/InputBox/InputBox";
import Textarea from "@components/common/Textarea";

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

  const [selectedStacks, setSelectedStacks] = useState();
  const [expectedDate, setExpectedDate] = useState("");
  const [introduction, setIntroduction] = useState("냥냥");
  const [totalPartCount, setTotalPartCount] = useState(1);

  useEffect(() => {
    console.log("title", title);
    console.log("email", email);
    console.log("place", place);
    console.log("startDate", startDate);
    console.log("expectedDate", expectedDate);
    console.log("selectedStacks", selectedStacks);
    console.log("introduction", introduction);
  }, [
    title,
    email,
    place,
    startDate,
    expectedDate,
    selectedStacks,
    introduction
  ]);

  return (
    <AppLayout>
      <div>
        <InputBox
          label="제목"
          placeholder="제목을 입력해주세요"
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
            canAllowClear={true}
            setSelectedValue={setPlace}
          />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <InputBox
            label="연락 이메일"
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
          <SelectBox
            label={"예상기간"}
            defaultValue={"1개월"}
            options={expectedDateOptions}
            canAllowClear={true}
            setSelectedValue={setExpectedDate}
          />
        </S.InnerWrapper>
      </S.Wrapper>
      <h2>모집 분야</h2>
      <PartBox />
      <Button
        onClick={() => {
          console.log("onClick");
        }}
      >
        모집분야 추가
      </Button>
      <h2>프로젝트 소개</h2>
      <Textarea
        isIntroduction={true}
        isLogin={true}
        onChange={(e) => setIntroduction(e.target.value)}
      >
        {introduction}
      </Textarea>
    </AppLayout>
  );
};
export default Create;
