import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const FlexContainer = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : null)};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-width: 340px;
  min-height: calc(100vh - 198px);
  margin: 0 auto 190px;

  @media (max-width: 700px) {
    padding: 0 18px;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div<{ margin?: string; padding?: string }>`
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
`;

export const FullName = styled.h2`
  font-size: 18px;
`;

export const Email = styled.div`
  color: ${theme.$gray200};
`;

export const DefinitionList = styled.dl`
  display: flex;
  gap: 20px;
  margin: 30px 0 60px;
`;

export const DefinitionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;

  dt {
    font-size: 18px;
    line-height: 22px;
  }

  dd {
    order: -1;
    line-height: 24px;
    font-size: 20px;
    font-weight: 700;
  }
`;
