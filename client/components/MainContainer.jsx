import React from 'react';
import EventBoard from './EventBoard';
import HeaderAppBar from "./HeaderAppBar";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function MainContainer() {
  return (
    <Container sx={{padding: 0}}>
      <HeaderAppBar />
      <EventBoard />
    </Container>
  );
}


export default MainContainer;