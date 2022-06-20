import React, { useState, useEffect } from "react";
import { Input } from "antd";
import SelectBox from "@components/create/SelectBox";
import DatePicker from "@components/create/DatePicker";
import { AppLayout, Label, Button, Textarea } from "@components/common";
import * as S from "./style";
import { usePrompt } from "../../routes/Blocker";
import PartBox from "@components/create/PartBox";
import CHANNELS from "@constants/channel";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { postAPI } from "@utils/apis";

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

interface StateType {
  channel: string;
  email: string;
  expectedDate: string;
  image: string;
  introduction: string;
  people: string;
  postId: string;
  skills: object;
  startDate: string;
  title: string;
  place: string;
}

const Edit: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as StateType;
  console.log(state.skills);
  const { channel, id } = useParams<Record<string, string>>();
  const [_title, setTitle] = useState(state.title);
  const [place, setPlace] = useState(state.place);
  const [email, setEmail] = useState(state.email);
  const [startDate, setStartDate] = useState(state.startDate);
  const [expectedDate, setExpectedDate] = useState(state.expectedDate);
  const [introduction, setIntroduction] = useState(state.introduction);
  const [parts, setParts] = useState({
    channel: state.channel,
    people: state.people,
    skills: Object.values(state.skills)
  });
  usePrompt("현재 페이지를 벗어나시겠습니까? ", true);

  const handleUpdateParts = (part) => {
    const newParts = { ...part };
    setParts(newParts);
  };

  const handleEdit = () => {
    const currentChannelId = CHANNELS[parts.channel]._id;
    const title = JSON.stringify({
      title: _title,
      introduction,
      email,
      expectedDate,
      place,
      startDate,
      parts
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", null);
    formData.append("channelId", currentChannelId);
    formData.append("postId", id);

    console.log(formData.get("title"));
    console.log(formData.get("channelId"));
    const editPost = async (formData: FormData) => {
      await postAPI.updatePost(formData).then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          const ret = confirm(
            "수정이 완료되었습니다. 메인페이지로 이동합니다."
          );
          if (ret) navigate("/");
        }
      });
    };
    editPost(formData);
  };

  useEffect(() => {
    console.log("title", _title);
    console.log("email", email);
    console.log("place", place);
    console.log("startDate", startDate);
    console.log("expectedDate", expectedDate);
    console.log("introduction", introduction);
    console.log("parts", parts);
  }, [_title, email, place, startDate, expectedDate, introduction, parts]);

  return (
    <AppLayout>
      <div>
        <Label>제목</Label>
        <Input
          placeholder={"제목을 입력해주세요"}
          value={_title}
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
          <DatePicker
            defaultValue={startDate}
            setSelectedValue={setStartDate}
          />
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
      <h3>모집 분야</h3>
      <PartBox
        initialChannel={parts.channel}
        initialPeople={parts.people}
        initialSkills={parts.skills}
        handleUpdate={handleUpdateParts}
        handleDelete={() => {
          console.log("hi");
        }}
        disabled={true}
      />
      <h3 style={{ margin: "20px 0" }}>프로젝트 소개</h3>
      <Textarea
        isIntroduction={true}
        isLogin={true}
        onChange={(e) => setIntroduction(e.target.value)}
      >
        {introduction}
      </Textarea>
      <Button isRound={true} width="300" onClick={handleEdit}>
        수정하기
      </Button>
    </AppLayout>
  );
};
export default Edit;
