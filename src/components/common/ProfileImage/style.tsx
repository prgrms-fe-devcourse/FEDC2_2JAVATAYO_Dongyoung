import styled from "@emotion/styled";

export const sizeMap = {
  sm: 36,
  md: 40,
  lg: 80
};

export const ImageContainer = styled.div<{
  block: boolean;
  imgSize: string;
  pointer: boolean;
}>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
  width: ${({ imgSize }) => imgSize}px;
  height: ${({ imgSize }) => imgSize}px;
  border-radius: 50%;
  overflow: hidden;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
