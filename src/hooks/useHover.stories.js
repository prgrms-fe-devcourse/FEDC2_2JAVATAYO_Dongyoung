import styled from "@emotion/styled";
import useHover from "./useHover";

export default {
  title: "Hooks/useHover"
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

export const Default = () => {
  const [ref, hover] = useHover();

  return <Box ref={ref}>{hover ? "호버⭕" : "호버❌"}</Box>;
};
