import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const ImageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.$gray400};
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
`;

export const UploadImageWrapper = styled.div`
  margin: 20px 0;
`;
