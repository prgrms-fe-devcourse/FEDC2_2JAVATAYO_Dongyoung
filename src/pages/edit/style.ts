import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  margin: 10px 0;
  label {
    margin: 5px 0;
  }
`;

export const InnerWrapper = styled.div`
  width: 50%;
`;

export const ButtonWrapper = styled.div`
  margin: auto;
`;

export const H3 = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DivWrapper = styled.div`
  margin: 10px 0;
`;

export const ImageWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin: 50px auto;
  gap: 10px;
`;

export const ImageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.$gray400};
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
`;
