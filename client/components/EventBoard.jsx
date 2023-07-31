import React from 'react';
import EventList from './EventList';
import { useState } from "react";

import Button from '@mui/material/Button';
import AddEventForm from "./AddEventForm";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

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
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Button variant='contained' sx={{ m: 3 }}onClick={handleClickOpen}>Add Event</Button>
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <TextField 
              margin='dense'
              label='Username'
              type='text'
              variant='standard'
              onChange={e => setUserName(e.target.value)}
              />
        <Button variant='outlined' sx={{marginTop: 2, marginLeft: 5}} onClick={handleClickAddUser}>Add User</Button>
      </Container>
      {invalidUserName && <Alert severity='error'>Please enter a username.</Alert>}
      <AddEventForm open={open} setOpen={setOpen} handleClose={handleClose} />
      <Container sx={{ width: '80%', height: '50%', borderBlockColor: "white" }}>
        <EventList/>
      </Container>
    </Container>

  );
}


export default EventBoard;