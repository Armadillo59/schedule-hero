import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from './themes';
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
  
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <div>Placeholder App</div>
        <MainContainer />
    </ThemeProvider>
  );
}

export default App;