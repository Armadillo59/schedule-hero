import React from 'react';
import EventList from './EventList';
import { useState } from "react";

import Button from '@mui/material/Button';
import AddEventForm from "./AddEventForm";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function EventBoard() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [invalidUserName, setInvalidUserName] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickAddUser = () => {
    if (userName === '') {
      setInvalidUserName(true);
      return;
    }
    
    const body = {
      userName: userName
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };

    fetch(`/user`, requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('error submitting event form: ', err);
      })
  }

  return (
    <Container disableGutters sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Button variant='contained' sx={{ m: 3 }}onClick={handleClickOpen}>Add Event</Button>
      <Container disableGutters sx={{display: 'flex', justifyContent: 'center'}}>
        <TextField 
              margin='dense'
              label='Username'
              type='text'
              variant='standard'
              onChange={e => setUserName(e.target.value)}
              />
        <Button variant='outlined' sx={{marginTop: 2, marginLeft: 5}} onClick={handleClickAddUser}>Add User</Button>
      </Container>
      <Container disableGutters sx={{display: 'flex', justifyContent: 'center'}}>
        {invalidUserName && <Alert sx={{position: 'absolute', marginTop: 2}} severity='error'>Please enter a username.</Alert>}
      </Container>
      <AddEventForm open={open} setOpen={setOpen} handleClose={handleClose} />
      <Container disableGutters sx={{ marginTop: 16, width: '90%' }}>
        <Typography variant="h5">
          Events
        </Typography>
        <Paper elevation={4} sx={{  width: '100%', height: '60vh' }}>
          <Paper variant="outlined" sx={{ width: '100%', height: '100%', backgroundColor: ''}}>
            <EventList/>
          </Paper>
        </Paper>
      </Container>
    </Container>

  );
}


export default EventBoard;