import styled from "@emotion/styled";

export const LikeBtn = styled.div<{ userId: string }>`
  display: inline-flex;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    transition: all 0.5s;
  }
  span {
    font-size: 16px;
    margin-left: 5px;
  }

  &:hover svg {
    transform: ${({ userId }) => (userId ? "scale(1.1)" : null)};
  }
`;
