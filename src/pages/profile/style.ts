import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Contents = styled.div`
  min-height: calc(100vh - 198px);
`;

export const FlexContainer = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  reward?: boolean;
}>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : null)};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  min-height: ${({ reward }) => (reward ? "72px" : null)};
  margin-bottom: ${({ reward }) => (reward ? "20px" : null)};
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

export const Wrapper = styled.div<{
  margin?: string;
  padding?: string;
  center?: boolean;
}>`
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  text-align: ${({ center }) => (center ? "center" : null)};
`;

export const FullName = styled.h2`
  font-size: 18px;
`;

export const Email = styled.div`
  color: ${theme.$gray200};
`;

export const DefinitionList = styled.dl<{ existFollowIcon: boolean }>`
  display: flex;
  gap: 20px;
  margin: ${({ existFollowIcon }) =>
    existFollowIcon ? "0 0 27px" : "56px 0 27px"};
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
