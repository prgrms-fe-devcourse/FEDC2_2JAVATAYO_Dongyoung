import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const FollowIcon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  right: -3px;
  bottom: 0;
`;

export const IconButton = styled.div`
  position: absolute;
  bottom: 0;
  right: -3px;
  width: 20px;
  height: 20px;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteFollowWrapper = styled.div<{ show: boolean }>`
  position: relative;

  button {
    display: ${({ show }) => (show ? "block" : "none")};
    position: absolute;
    bottom: -50px;
    left: -170px;
    width: 300px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.$gray50};
    background-color: ${theme.$gray400};

    &:hover {
      opacity: 1;
      background-color: ${theme.$gray600};
    }
  }
`;
