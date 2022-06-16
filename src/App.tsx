import React from "react";
import AppRouter from "./routes/Router";
import { Global, ThemeProvider } from "@emotion/react";
import reset from "./styles/reset";
import theme from "./styles/theme";
import UserProvider from "./contexts/UserProvider";
const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
