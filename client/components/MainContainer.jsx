import React from 'react';
import EventBoard from './EventBoard';
import HeaderAppBar from "./HeaderAppBar";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function MainContainer() {
  return (
    <Container disableGutters >
      <HeaderAppBar />
      <EventBoard />
    </Container>
  );
}


export default MainContainer;