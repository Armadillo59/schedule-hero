import React from 'react';
import EventBoard from './EventBoard';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function MainContainer() {
  return (
    <Container disableGutters >
      <EventBoard />
    </Container>
  );
}


export default MainContainer;