import React from "react";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function DayAvailabilityRow(props) {
    const { day, availability, setAvailability } = props;

    const hours = [
      "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", 
      "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", 
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", 
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00",  
    ]

    const hourSelection = [];

    hours.forEach((hour) => {
      hourSelection.push(<MenuItem value={hour} key={crypto.randomUUID()}>{hour}</MenuItem>);
    });

    function handleChange(e) {
      const newAvailability = {...availability};

      if (e.target.name === 'start') newAvailability[day].start = e.target.value;
      if (e.target.name === 'end') newAvailability[day].end = e.target.value;
      setAvailability(newAvailability);
    }

    return (
      <Container sx={{ display: 'flex', alignItems: 'center', marginTop: 1, justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{}}>
          {day}
      </Typography>
      <div>

        <FormControl required sx={{ m: 1, minWidth: 120}} size="small">
          <InputLabel id="from-label">From: </InputLabel>
          <Select
            name='start'
            required
            labelId='from-label'
            label="From:"
            defaultValue="None"
            value={availability[day].start}
            onChange={handleChange}
            MenuProps = {{ PaperProps: { sx: { maxHeight: 200 } } }}
            >
            {hourSelection}
          </Select>
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120}} size="small">
          <InputLabel id="from-label">To: </InputLabel>
          <Select
            name='end'
            required
            labelId='from-label'
            label="To:"
            defaultValue="None"
            value={availability[day].end}
            onChange={handleChange}
            MenuProps = {{ PaperProps: { sx: { maxHeight: 200 } } }}
            >
            {hourSelection}
          </Select>
          </FormControl>
        </div>
    </Container>
    )
}


export default DayAvailabilityRow;