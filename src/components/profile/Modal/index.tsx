import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useClickAway } from "@hooks";
import closeSvg from "@assets/icons/icon_close.svg";
import * as S from "./style";

interface ModalInterface {
  children: React.ReactNode;
  height: string;
  visible: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalInterface> = ({
  children,
  height,
  visible = false,
  onClose,
  ...props
}) => {
  const ref = useClickAway(() => {
    onClose();
  });

  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <S.BackgroundDim visible={visible}>
      <S.ModalContainer ref={ref} height={height} {...props}>
        <S.CloseButton onClick={onClose}>
          <img src={closeSvg} alt="닫기 버튼" />
        </S.CloseButton>
        {children}
      </S.ModalContainer>
    </S.BackgroundDim>,
    el
  );
};

export default Modal;
