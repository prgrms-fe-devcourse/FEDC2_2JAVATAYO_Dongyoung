import * as S from "./style";
import Button from "../Button";
import SearchBar from "./UserSearchBar";
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
          <S.BottomSheetHeader>
            <div
              style={{
                color: "white",
                fontSize: "20px",
                padding: "20px 20px 10px 30px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "20px"
                }}
              >
                같이 봉고차탈 친구 찾기!🚐
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "20px"
                }}
              >
                ▲
              </span>
            </div>
            <div
              style={{
                color: "white",
                fontSize: "16px",
                padding: "0px 0px 10px 30px"
              }}
            >
              친구 검색으로 프로젝트 팀원을 찾아봐요~
            </div>
          </S.BottomSheetHeader>
          <S.BottomSheetContents>
            <S.Content>
              <SearchBar />
            </S.Content>
            <S.Content onClick={showBottomSheet}>Delete</S.Content>
            <S.Content onClick={showBottomSheet}>New</S.Content>
            <S.Content onClick={showBottomSheet}>Cancel</S.Content>
            <S.Content onClick={showBottomSheet}>Cancel</S.Content>
            <S.Content onClick={showBottomSheet}>Cancel</S.Content>
            <S.Content onClick={showBottomSheet}>Cancel</S.Content>
            <S.Content onClick={showBottomSheet}>Cancel</S.Content>
          </S.BottomSheetContents>
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
