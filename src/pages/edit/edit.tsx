import React, { useState } from "react";
import { Input } from "antd";
import {
  SelectBox,
  DatePicker,
  PartBox,
  ImageUploader
} from "@components/create";
import { AppLayout, Label, Button, Textarea } from "@components/common";
import * as S from "./style";
import { usePrompt } from "../../routes/Blocker";
import CHANNELS from "@constants/channel";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { postAPI } from "@utils/apis";
import { DeleteOutlined } from "@ant-design/icons";
import { useAuth } from "@contexts/AuthProvider";

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
  imagePublicId?: string;
}

const Edit: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as StateType;
  const { userInfo } = useAuth();
  const { channel, id } = useParams<Record<string, string>>();
  const [_title, setTitle] = useState(state ? state.title : "");
  const [place, setPlace] = useState(state ? state.place : "");
  const [email, setEmail] = useState(state ? state.email : "");
  const [startDate, setStartDate] = useState(state ? state.startDate : "");
  const [expectedDate, setExpectedDate] = useState(
    state ? state.expectedDate : ""
  );
  const [introduction, setIntroduction] = useState(
    state ? state.introduction : ""
  );
  const [parts, setParts] = useState({
    channel: state ? state.channel : "",
    people: state ? state.people : "",
    skills: state ? Object.values(state.skills) : []
  });
  const [images, setImages] = useState([]);
  const [imageSrc, setImageSrc] = useState(state ? state.image : "");

  if (!userInfo.isLoggedIn) {
    alert("비로그인 상태에서는 접근이 불가능합니다.");
    navigate("/");
  }
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
    formData.append("image", images.length !== 0 ? images[0].file : null);
    formData.append("channelId", currentChannelId);
    formData.append("postId", id);
    if (imageSrc === "" && state.image !== "") {
      formData.append("imageToDeletePublicId", state.imagePublicId);
    }

    const editPost = async (formData: FormData) => {
      await postAPI.updatePost(formData).then((res) => {
        if (res.status === 200) {
          alert("수정이 완료되었습니다");
          navigate(`/detail/${id}`);
        }
      });
    };
    editPost(formData);
  };

  return (
    <AppLayout>
      <S.DivWrapper>
        <Label>제목</Label>
        <Input
          placeholder={"제목을 입력해주세요"}
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.DivWrapper>
      <S.Wrapper>
        <S.InnerWrapper>
          <SelectBox
            label={"진행방식"}
            defaultValue={place}
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
            defaultValue={expectedDate}
            options={expectedDateOptions}
            canAllowClear={true}
            setSelectedValue={setExpectedDate}
          />
        </S.InnerWrapper>
      </S.Wrapper>
      <S.H3>모집 분야</S.H3>
      <PartBox
        initialChannel={parts.channel}
        initialPeople={parts.people}
        initialSkills={parts.skills}
        handleUpdate={handleUpdateParts}
        handleDelete={() => {
          //TODO : 이건 기능 고민해봐야해서 추후에 console 삭제할게용
          console.log("hi");
        }}
        disabled={true}
      />
      <S.H3>프로젝트 소개</S.H3>
      <Textarea
        isIntroduction={true}
        isLogin={true}
        onChange={(e) => setIntroduction(e.target.value)}
      >
        {introduction}
      </Textarea>
      {imageSrc ? (
        <S.ImageItem>
          <img src={imageSrc} alt="img" width="100" />
          <DeleteOutlined
            onClick={() => {
              setImageSrc("");
            }}
            style={{ cursor: "pointer", transform: "scale(1.2)" }}
          />
        </S.ImageItem>
      ) : (
        <ImageUploader images={images} setImages={setImages} />
      )}
      <S.Wrapper>
        <Button isRound={true} width="300" onClick={handleEdit}>
          수정하기
        </Button>
      </S.Wrapper>
    </AppLayout>
  );
};
export default Edit;
