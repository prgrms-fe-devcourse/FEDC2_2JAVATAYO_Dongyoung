import styled from "@emotion/styled";
import { useState } from "react";
import useClickAway from "./useClickAway";

export default {
  title: "Hooks/useClickAway"
};

const Box = styled.div`
  width: 700px;
  height: 100px;
  padding: 10px;
  background-color: pink;
`;

export const Default = () => {
  const [count, setCount] = useState(0);
  const ref = useClickAway(() => setCount(count + 1));

  return (
    <Box ref={ref}>
      <div style={{ display: "block", marginBottom: "10px", fontWeight: 700 }}>
        상자(=ref) 바깥 영역 클릭 횟수: {count}
      </div>
      <div>
        (상자 바깥 영역에서 발생하는 클릭 이벤트만 useClickAway 인수로 전달한
        콜백함수가 호출됨!)
      </div>
    </Box>
  );
};
