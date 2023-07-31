import React from "react";

import { Card, Box, Typography, CardContent ,Button, sizing } from "@mui/material";



function Event( {eventName, user, participants, day, start, end}){

    return (
        <Card sx={{ borderBottom: 1, my: '1rem', boxShadow: 3,  width: "25%", p: '.5rem'}}>
            <CardContent>

                <Typography sx={{ mt: '1rem'}}>
                    
                   <strong> User </strong>: { user }
                </Typography>
                <Typography>
                    <strong>Event </strong>: { eventName }
        
                </Typography>
                <Typography>
                <strong>Participents</strong>: {participants}
                </Typography>
                <Typography>
                     Day: {day}  Start:{start} - End:{end}
                </Typography>
            </CardContent>
        </Card>

    )
}


export default Event;