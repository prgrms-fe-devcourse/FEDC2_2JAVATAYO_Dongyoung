import { useEffect, useRef, useState } from "react";
import SelectBox from "@components/create/SelectBox";
import DatePicker from "@components/create/DatePicker";
import { AppLayout, Label, Button, Textarea } from "@components/common";
import * as S from "./style";
import { usePrompt } from "../../routes/Blocker";
import ImageUploader from "@components/create/ImageUploader/ImageUploader";
import PartBoxList from "@components/create/PartBoxList";
import { Input } from "antd";
import Select from "@components/create/Select";
import { postAPI } from "@utils/apis";
import CHANNELS from "@constants/channel";

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
  const [_title, setTitle] = useState("");
  const [place, setPlace] = useState("online");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [parts, setParts] = useState([
    { channel: "front", people: "1", skills: [] }
  ]);
  const titleRef = useRef(null);
  const emailRef = useRef(null);

  const handleCreate = () => {
    if (_title === "") {
      titleRef.current.focus();
      return;
    } else if (email === "") {
      emailRef.current.focus();
      return;
    }

    // parts.forEach((part) => {
    // const currentChannelId = CHANNELS[part.channel]._id;
    const title = JSON.stringify({
      title: "기술뱃지 많이많이",
      introduction: `2JAVATAYO 이라는 서비스를 만들고 있는 스타트업 입니다. 현재 팀원은 PM, 모바일 개발자, 디자이너 이렇게 총 세명인 상태이고, 백엔드 개발자 분을 현재 찾고 있습니다.
      
        현재 팀원들 모두 사이드 프로젝트 형식으로 진행중이니 참고바랍니다!
      
        자세한 내용은 아래 노션페이지에서 확인 부탁드립니다!`,
      email: "puh0128@naver.com",
      expectedDate: "6개월 이상",
      place: "notyet",
      startDate: "2022/06/17",
      parts: {
        channel: "back",
        people: "미정",
        skills: [
          ["NodeJs"],
          ["Firebase"],
          ["Django"],
          ["Spring"],
          ["PostgreSql"],
          ["GraphQl"]
        ]
      }
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", null);
    formData.append("channelId", "62a55de1c882bf3a287f961c");

    const getPost = async (formData: FormData) => {
      const response = await postAPI.createPost(formData);
      console.log(response.data);
    };

    // const title = JSON.stringify({
    //   title: _title,
    //   introduction,
    //   email,
    //   expectedDate,
    //   place,
    //   startDate,
    //   parts
    // });
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("image", null);
    // formData.append("channelId", currentChannelId);

    // console.log(formData.get("title"));
    // console.log(formData.get("image"));
    // console.log(formData.get("channelId"));
    // const getPost = async (formData: FormData) => {
    //   const res = await postAPI.createPost(formData);
    //   console.log(res);
    // };
    getPost(formData);
    // });
  };

  usePrompt("현재 페이지를 벗어나시겠습니까? ", true);
  useEffect(() => {
    console.log("title", _title);
    console.log("email", email);
    console.log("place", place);
    console.log("startDate", startDate);
    console.log("expectedDate", expectedDate);
    console.log("introduction", introduction);
    console.log("parts", parts);
  }, [_title, email, place, startDate, expectedDate, introduction, parts]);

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
          ref={titleRef}
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
      <Button buttonType="red-line" onClick={handleAddParts}>
        모집분야 추가
      </Button>
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
      <ImageUploader />
    </AppLayout>
  );
};
export default Create;
