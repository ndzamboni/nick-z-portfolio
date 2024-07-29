import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <div>
        <GlobalStyles />
        <div>
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
