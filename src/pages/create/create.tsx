import { useRef, useState } from "react";
import { AppLayout, Label, Button, Textarea } from "@components/common";
import * as S from "./style";
import { usePrompt } from "../../routes/Blocker";
import {
  ImageUploader,
  Select,
  PartBoxList,
  SelectBox,
  DatePicker
} from "@components/create";
import { Input } from "antd";
import { postAPI } from "@utils/apis";
import CHANNELS from "@constants/channel";
import { useNavigate } from "react-router";
import { currentDate } from "@utils/Date";

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
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [_title, setTitle] = useState("");
  const [place, setPlace] = useState("online");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(currentDate);
  const [expectedDate, setExpectedDate] = useState("1개월");
  const [introduction, setIntroduction] = useState("");
  const [parts, setParts] = useState([
    { channel: "front", people: "1", skills: [] }
  ]);
  const [canNavigate, setCanNavigate] = useState(true);
  const [alertMessage, setAlertMessage] = useState("메인페이지로 이동합니다");
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const textAreaRef = useRef(null);

  const validateEmail = (email) => {
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  const handleCreate = () => {
    if (_title === "") {
      titleRef.current.focus();
      return;
    } else if (email === "" || !validateEmail(email)) {
      emailRef.current.focus();
      return;
    } else if (introduction.length < 2) {
      textAreaRef.current.focus();
      return;
    }

    //TODO : blocker.js 멘트 수정?
    parts.forEach((part) => {
      const currentChannelId = CHANNELS[part.channel]._id;
      const title = JSON.stringify({
        title: _title,
        introduction,
        email,
        expectedDate,
        place,
        startDate,
        parts: part
      });
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", images.length !== 0 ? images[0].file : null);
      formData.append("channelId", currentChannelId);
      const getPost = async (formData: FormData) => {
        await postAPI.createPost(formData).then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            navigate("/");
          }
        });
      };
      getPost(formData);
    });
  };

  usePrompt(alertMessage, canNavigate);

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
      <S.DivWrapper>
        <Label>제목</Label>
        <Input
          ref={titleRef}
          placeholder={"제목을 입력해주세요"}
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.DivWrapper>
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
            pattern=".+@globex\.com"
            type="email"
            ref={emailRef}
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
            defaultValue={currentDate()}
            setSelectedValue={setStartDate}
          />
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
      <S.H3>모집 분야</S.H3>
      <PartBoxList
        disabled={false}
        parts={parts}
        handleUpdateParts={handleUpdateParts}
        handleDeleteParts={handleDeleteParts}
      />
      <Button buttonType="red-line" onClick={handleAddParts}>
        모집분야 추가
      </Button>
      <S.H3>프로젝트 소개</S.H3>
      <Textarea
        isIntroduction={true}
        isLogin={true}
        textAreaRef={textAreaRef}
        onChange={(e) => setIntroduction(e.target.value)}
      >
        {introduction}
      </Textarea>
      <ImageUploader images={images} setImages={setImages} />
      <S.Wrapper>
        <Button isRound={true} width="300" onClick={handleCreate}>
          생성하기
        </Button>
      </S.Wrapper>
    </AppLayout>
  );
};
export default Create;
