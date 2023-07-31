import React from 'react';
import EventList from './EventList';
import { useState } from "react";

import Button from '@mui/material/Button';
import AddEventForm from "./AddEventForm";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

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
    <div>
      <Button variant='contained' onClick={handleClickOpen}>Add Event</Button>
      <TextField 
            margin='dense'
            label='Username'
            type='text'
            fullWidth
            variant='standard'
            onChange={e => setUserName(e.target.value)}
          />
      <Button variant='contained' onClick={handleClickAddUser}>Add User</Button>
      {invalidUserName && <Alert severity='error'>Please enter a username.</Alert>}
      <AddEventForm open={open} setOpen={setOpen} handleClose={handleClose} />
      <EventList />
    </div>

  );
}


export default EventBoard;