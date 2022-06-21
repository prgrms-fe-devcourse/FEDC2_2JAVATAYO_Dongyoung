import styled from "@emotion/styled";

export const NotFound = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  margin: auto;
  img {
    width: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  strong {
    font-weight: bold;
    font-size: 200px;
    color: #ffac0a;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }
  button {
    margin-top: 30px;
    width: 300px;
  }
`;
