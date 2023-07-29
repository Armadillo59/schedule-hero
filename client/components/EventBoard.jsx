import React from 'react';
import EventList from './EventList';
import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EventBoard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>Add Event</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin='dense'
            id='name'
            label='Event Name'
            type='text'
            fullWidth
            variant='standard'
          />
          <TextField 
            autoFocus
            margin='dense'
            id='name'
            label='Event Description'
            type='text'
            fullWidth
            variant='standard'
          />
          <Button variant='contained'>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
      <EventList />
    </div>

  );
}


export default EventBoard;