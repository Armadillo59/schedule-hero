import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from './themes';

import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import HeaderAppBar from "./components/HeaderAppBar";

const App = () => {

  return (
  
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <BrowserRouter>
          <HeaderAppBar/>
          <Routes>
            <Route path='/' element={<MainContainer />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;