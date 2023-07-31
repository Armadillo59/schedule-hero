import React, { useState } from "react";

import DayAvailabilityRow from "./DayAvailabilityRow";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';


function AddEventForm(props) {
    const { open, handleClose } = props;

    const [userName, setUserName] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [submitRequired, setSubmitRequired] = useState(false);
    const [availability, setAvailability] = useState({
      Monday: {
        start: '0:00',
        end: '24:00'
      },
      Tuesday: {
        start: '0:00',
        end: '24:00'
      },
      Wednesday: {
        start: '0:00',
        end: '24:00'
      },
      Thursday: {
        start: '0:00',
        end: '24:00'
      },
      Friday: {
        start: '0:00',
        end: '24:00'
      },
      Saturday: {
        start: '0:00',
        end: '24:00'
      },
      Sunday: {
        start: '0:00',
        end: '24:00'
      },
    });

    function isMissing(obj) {
      console.log(obj);
      for (const day in obj) {
        console.log(day.start);
        if (!obj[day].start.length || !obj[day].end.length) return true;
      }
      return false;
    }



    function handleSubmit(e) {
      // Send POST request with our current form data
      if (!userName.length || !eventName.length || !eventDescription || isMissing(availability)) {
        setSubmitRequired(true);
        return;
      } 

      const body = {
        userName: userName,
        eventName: eventName,
        eventDescription: eventDescription,
        availability: availability
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };

      fetch(`/event`, requestOptions)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log('error submitting event form: ', err);
        })

      console.log(body);
      handleClose();
    }



    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin='dense'
            label='Username'
            type='text'
            fullWidth
            variant='standard'
            onChange={e => setUserName(e.target.value)}
          />
          <TextField 
            // autoFocus
            margin='dense'
            label='Event Name'
            type='text'
            fullWidth
            variant='standard'
            onChange={e => setEventName(e.target.value)}
          />
          <TextField 
            margin='dense'
            label='Event Description'
            type='text'
            fullWidth
            variant='standard'
            onChange={e => setEventDescription(e.target.value)}
          />
          <DayAvailabilityRow day="Monday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Tuesday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Wednesday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Thursday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Friday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Saturday" availability={availability} setAvailability={setAvailability}/>
          <DayAvailabilityRow day="Sunday" availability={availability} setAvailability={setAvailability}/>
          {submitRequired && <Alert severity='error'>Please fill in the required information!</Alert>}
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
}


export default AddEventForm;