import * as S from "./style";
import Button from "../Button";

interface BottomSheetInterface {
  buttonType?: string;
  width?: string;
  height?: string;
  isRound?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BottomSheet: React.FC<BottomSheetInterface> = ({
  buttonType,
  width,
  height,
  isRound,
  onClick,
  isDisabled
}) => {
  const showBottomSheet = () => {
    const container = document.querySelector("#bottomSheetContainer");
    const bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );
    container.classList.add("active");
    setTimeout(() => {
      bottomSheet.classList.add("active");
    }, 1);
  };
  const hideBottomSheet = () => {
    const container = document.querySelector("#bottomSheetContainer");
    const bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );
    bottomSheet.classList.remove("active");

    setTimeout(() => {
      container.classList.remove("active");
    }, 400);
  };
  return (
    <div>
      <S.BottomSheetWrapper
        id="bottomSheetContainer"
        onClick={hideBottomSheet}
        /* style={{ height: "200px" }} */
      >
        <S.BottomSheet id="bottomSheet">
          <S.elementA onClick={showBottomSheet}>Edit</S.elementA>
          <S.elementA onClick={showBottomSheet}>Delete</S.elementA>
          <S.elementA onClick={showBottomSheet}>New</S.elementA>
          <S.elementA onClick={showBottomSheet}>Cancel</S.elementA>
          <S.elementA onClick={showBottomSheet}>Cancel</S.elementA>
          <S.elementA onClick={showBottomSheet}>Cancel</S.elementA>
          <S.elementA onClick={showBottomSheet}>Cancel</S.elementA>
          <S.elementA onClick={showBottomSheet}>Cancel</S.elementA>
        </S.BottomSheet>
      </S.BottomSheetWrapper>
    </div>
  );
};

BottomSheet.defaultProps = {
  buttonType: "red",
  width: "100%",
  height: "40",
  isRound: false,
  isDisabled: false
};

export default BottomSheet;
