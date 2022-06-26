import React from "react";
import AppRouter from "./routes/Router";
import { Global, ThemeProvider } from "@emotion/react";
import reset from "./styles/reset";
import theme from "./styles/theme";
import AuthProvider from "./contexts/AuthProvider";

const consoleLog = `쾅쾅쾅쾅쾅쾅쾅쾅쾅
쾅쾅         쾅쾅
쾅쾅（∩8ㅁ8）쾅쾅
  ＿/_ﾐつ/￣￣￣/
    ＼/＿＿＿/`;

const App: React.FC = () => {
  console.log(consoleLog);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
