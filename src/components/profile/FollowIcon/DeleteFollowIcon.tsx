import { FC, useState } from "react";
import Button from "@components/common/Button/Button";
import { useClickAway } from "@hooks";
import { ReactComponent as DeleteFollowSVG } from "@assets/icons/icon_delete_follow.svg";
import { Id } from "../ProfileImageBox/index";
import * as S from "./style";

const DeleteFollowIcon: FC<{ profileFullName: string; id: Id; onDelete }> = ({
  profileFullName,
  onDelete
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const ref = useClickAway((e) => {
    if (e.target.classList.contains("delete_svg") || !show) return;
    setShow(false);
  });

  const handleDeleteFollow = () => {
    setShow(false);

    alert("언팔되는 척하기");
    onDelete();
  };

  return (
    <S.DeleteFollowWrapper show={show}>
      <div onClick={handleShow} className="delete_svg">
        <DeleteFollowSVG width="20px" height="20px" />
      </div>

      <div ref={ref} onClick={handleDeleteFollow}>
        <Button width="300">{`${profileFullName}님 언팔로우하기`}</Button>
      </div>
    </S.DeleteFollowWrapper>
  );
};

export default DeleteFollowIcon;
