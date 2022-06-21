import styled from "@emotion/styled";

export const LikeBtn = styled.div<{ userId: string; clickable: boolean }>`
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
    transform: ${({ userId, clickable }) =>
      userId && clickable ? "scale(1.1)" : null};
  }
`;
