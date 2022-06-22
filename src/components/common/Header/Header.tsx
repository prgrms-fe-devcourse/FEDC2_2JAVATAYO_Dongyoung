import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logos/logo.svg";
import { ReactComponent as Bell } from "@assets/icons/icon_bell.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TempLogin from "../TempLogin";
import SearchBar from "../SearchBar";
import { notificationAPI } from "@utils/apis";
import { useAuth } from "@contexts/AuthProvider";
import CHANNELS from "@constants/channel";
import { IPost } from "src/types/model";
import DropDown from "../DropDown";
import ProfileImage from "../ProfileImage";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { onLogOut, userInfo } = useAuth();

  const [noticeContents, setNoticeContents] = useState([]);
  const [noticeSeen, setNoticeSeen] = useState(false);

  const notice = async () => {
    if (!userInfo.isLoggedIn) return;
    const { data } = await notificationAPI.getNotificationList();

    let num = 0;
    const filterData = data.filter((data) => {
      if (data.comment !== null && num < 3) {
        num++;
        return true;
      }
      return false;
    });

    const notificationData = filterData.map(({ comment, seen, post }) => {
      if (!comment) return;
      const { channel, title } = comment.post as IPost;
      return {
        seen: seen,
        title: getPostTitle(title),
        channel: getChannelLabel(channel),
        postId: post
      };
    });
    setNoticeSeen(!notificationData[0].seen);
    setNoticeContents(notificationData);
  };

  const getChannelLabel = (channelId) => {
    const channel = Object.values(CHANNELS).filter(
      (channel) => channel._id === channelId
    );
    return channel[0].label;
  };

  const getPostTitle = (post) => {
    return JSON.parse(post).title;
  };

  useEffect(() => {
    notice();
  }, [userInfo]);

  const notificationNav = noticeContents.map((item) => ({
    label: (
      <div>
        <p className="channel">#{item.channel}</p>
        <p className="title">{item.title}에 댓글이 달렸습니다.</p>
      </div>
    ),
    event: () => navigate(`/detail/${item.postId}`)
  }));

  const subNav = [
    {
      label: "마이페이지",
      event: () => navigate(`/profile/${userInfo._id}`)
    },
    {
      label: "로그아웃",
      event: () => onLogOut()
    }
  ];

  const getNoticeSeen = async () => {
    try {
      await notificationAPI.seenNotification();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.Header>
      <h1>2JAVATAYO </h1>
      <Link to={"/"}>
        <Logo />
      </Link>
      {/* 임시 */}
      <TempLogin />
      {/* 임시 */}
      {userInfo.isLoggedIn ? (
        <S.LoggedIn>
          <SearchBar />
          <Link to={"/create"}>새글쓰기</Link>
          <DropDown contents={notificationNav} left={-150}>
            <S.Notice
              onClick={() => {
                getNoticeSeen();
                setNoticeSeen(false);
              }}
              isGetAlarm={noticeSeen}
            >
              <Bell />
            </S.Notice>
          </DropDown>
          <DropDown contents={subNav}>
            <S.User>
              <ProfileImage
                size="sm"
                imgAlt={userInfo ? userInfo.fullName : null}
                imgSrc={userInfo ? userInfo.image : null}
              />
              <S.UserFullName>
                {userInfo ? userInfo.fullName : null}님
              </S.UserFullName>
            </S.User>
          </DropDown>
        </S.LoggedIn>
      ) : (
        <S.Flex>
          <SearchBar />
          <S.LoggedOut onClick={() => navigate("/signin")}>
            로그인 / 회원가입
          </S.LoggedOut>
        </S.Flex>
      )}
    </S.Header>
  );
};

export default Header;
