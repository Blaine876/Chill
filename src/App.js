import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
