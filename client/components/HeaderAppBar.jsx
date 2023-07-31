import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HeaderAppBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Can replace with session once that is implemented
  const [displayLogOut, setDisplayLogOut] = useState(() => {
    if (location.pathname === '/') return true;
    return false;
  })

  function handleLogOut(e) {
    // Probably need to resolve token or session, delete stuff in localStorage when logging out
    setDisplayLogOut(false);
    navigate('/login');
  }

  return (
    <AppBar position='static'>
      <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" fontFamily="monospace" >
          SCHEDULE HERO
        </Typography>
        {displayLogOut && <Button variant="text" onClick={handleLogOut}>Log Out</Button>}
      </Container>
    </AppBar>
  )
}

export default HeaderAppBar;