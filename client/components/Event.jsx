import React from "react";

import { Card, Box, Typography, cardContent ,Button, sizing } from "@mui/material";



function Event( {eventName, User, day, start, end}){

    return (
        <Card sx={{ borderBottom: 1, my: '1rem', boxShadow: 3,  width: "25%", p: '.5rem'}}>
            <cardContent>

                <Typography sx={{ mt: '1rem'}}>
                    {/* User : {} */}
                   <strong> User </strong>: Pinta
                </Typography>
                <Typography>
                    <strong>Event </strong>: Dinner
                    {/* Event : {eventName} */}
                </Typography>
                <Typography>
                <strong>Avalibality</strong>: Monday : 2:00 - 3:00
                </Typography>

            </cardContent>
        </Card>

    )
}


export default Event;