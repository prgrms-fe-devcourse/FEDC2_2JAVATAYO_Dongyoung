import styled from "@emotion/styled";

export const PageLoading = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    border-radius: 50%;
    width: 300px;
  }
`;
