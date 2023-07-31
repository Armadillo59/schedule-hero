import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from './themes';
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
  
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <MainContainer />
    </ThemeProvider>
  );
}

export default App;