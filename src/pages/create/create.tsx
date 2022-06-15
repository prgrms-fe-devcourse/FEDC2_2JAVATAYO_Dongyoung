import { useEffect, useState } from "react";
import SelectBox from "../../components/create/SelectBox";
import DatePicker from "../../components/create/DatePicker";
import PartBox from "../../components/create/PartBox";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import AppLayout from "../../components/common/AppLayout";
import Button from "../../components/common/Button";
import * as S from "./style";

const Create: React.FC = () => {
  const placeOptions = [
    { id: 1, value: "online", label: "온라인" },
    { id: 2, value: "offline", label: "오프라인" },
    { id: 3, value: "both", label: "온오프라인 병행" },
    { id: 4, value: "notyet", label: "미정" }
  ];

  const expectedDateOptions = [
    { id: 1, value: "1개월", lable: "1개월" },
    { id: 2, value: "2개월", lable: "2개월" },
    { id: 3, value: "3개월", lable: "3개월" },
    { id: 4, value: "4개월", lable: "4개월" },
    { id: 5, value: "5개월", lable: "5개월" },
    { id: 6, value: "6개월 이상", lable: "6개월 이상" },
    { id: 7, value: "notyet", lable: "미정" }
  ];

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("online");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");

  const [selectedStacks, setSelectedStacks] = useState();
  const [expectedDate, setExpectedDate] = useState("");
  const [totalPartCount, setTotalPartCount] = useState(1);

  useEffect(() => {
    console.log("title", title);
    console.log("email", email);
    console.log("place", place);
    console.log("startDate", startDate);
    console.log("expectedDate", expectedDate);
    console.log("selectedStacks", selectedStacks);
  }, [title, email, place, startDate, expectedDate, selectedStacks]);

  // TODO : Label + Input -> InputBox
  return (
    <AppLayout>
      <div>
        <Label>제목</Label>
        <Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <S.Wrapper>
        <SelectBox
          label={"진행방식"}
          defaultValue={"온라인"}
          options={placeOptions}
          canAllowClear={true}
          setSelectedValue={setPlace}
        />
        <Label>연락 이메일</Label>
        <Input
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.Wrapper>
      <S.Wrapper>
        <Label> 시작일</Label>
        <DatePicker setSelectedValue={setStartDate} />
        <SelectBox
          label={"예상기간"}
          defaultValue={"1개월"}
          options={expectedDateOptions}
          canAllowClear={true}
          setSelectedValue={setExpectedDate}
        />
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
    </AppLayout>
  );
};
export default Create;
