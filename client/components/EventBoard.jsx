import React from 'react';
import EventList from './EventList';
import { useState } from "react";

import Button from '@mui/material/Button';
import AddEventForm from "./AddEventForm";

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
      <AddEventForm open={open} setOpen={setOpen} handleClose={handleClose} />
      <EventList />
    </div>

  );
}


export default EventBoard;