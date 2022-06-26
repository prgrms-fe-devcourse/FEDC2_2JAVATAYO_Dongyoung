import styled from "@emotion/styled";

export const Container = styled.div<{ name: string }>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ name }) => borderColorMap[name]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
`;

export const Img = styled.img<{ name: string }>`
  position: absolute;
  width: ${({ name }) => (name === "kotlin" ? "22px" : "28px")};
  height: ${({ name }) => (name === "kotlin" ? "22px" : "28px")};
  top: ${({ name }) => (topLeftMap[name] ? topLeftMap[name].top : "50%")};
  left: ${({ name }) => (topLeftMap[name] ? topLeftMap[name].left : "50%")};
  transform: ${({ name }) =>
    topLeftMap[name] ? "none" : "translateX(-50%) translateY(-50%)"};
`;

export const ToolTip = styled.div`
  z-index: 100;
  position: absolute;
  min-width: 16px;
  top: 45px;
  left: 50%;
  border: 1px solid black;
  padding: 1px 4px;
  background-color: #fff;
  transform: translateX(-50%);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;

const borderColorMap = {
  angular: "#DD0031",
  appwrite: "#F02E65",
  bootstrap: "#7952B3",
  "c/c++": "#00599C",
  django: "#092E20",
  express: "#000000",
  fastapi: "#009688",
  figma: "#F24E1E",
  firebase: "#FFCA28",
  flutter: "#02569B",
  gatsby: "#663399",
  graphql: "#E10098",
  html5: "#E34F26",
  java: "#5382A1",
  julia: "#9558B2",
  kotlin: "#7F52FF",
  lua: "#2C2D72",
  mongodb: "#47A248",
  mui: "#007FFF",
  mysql: "#4479A1",
  nestjs: "#E0234E",
  nextjs: "#000000",
  nodejs: "#339933",
  nuxtjs: "#00DC82",
  oracle: "#F80000",
  postgresql: "#4169E1",
  python: "#387EB8",
  r: "#276DC3",
  react: "#61DAFB",
  recoil: "#007AF4",
  redux: "#764ABC",
  rn: "#61DAFB",
  sass: "#CC6699",
  spring: "#6DB33F",
  svelte: "#FF3E00",
  swift: "#F05138",
  tailwind: "#06B6D4",
  tensorflow: "#FF6F00",
  typescript: "#3178C6",
  vue: "#4FC08D",
  zeplin: "#FDBD39"
};

const topLeftMap = {
  django: { top: "5px", left: "3px" },
  flutter: { left: "3px" },
  html5: { top: "7px" },
  java: { top: "4px" },
  mui: { top: "7px" },
  mysql: { top: "4px" },
  postgresql: { top: "8px" },
  vue: { top: "6px" }
};
