import React from "react";
import AppRouter from "./routes/Router";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

const App: React.FC = () => {
  return (
    <div>
      <Global styles={reset} />
      <AppRouter />
    </div>
  );
};

export default App;
