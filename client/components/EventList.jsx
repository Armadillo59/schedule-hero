import React from 'react';
import Event from './Event';
import { useState, useEffect } from 'react';

//Usestate 

function EventList() {
  const { currentState, updateState } = useState({})

  
  useEffect(()=>{

    const fetchEvent = async () =>{
      try {
        const response = await fetch('/events/David')
        const data = await response.json();
        console.log("data from backend: ", data)
      updateState(data);
      }catch (err){
        console.log(` ${err}`)
      }
    }
    fetchEvent();
  }, [])
   //[] dependancies for when it will fire again 
   //when the form is submitted, it should fire again with a delay 

   

  return (
      // <Event key={index}   />
      <div className='cardContainer'>
      {/* {currentState.map(events=>{
        return (
          <div className='cardContainer'>
            <Event eventName={events.eventName}
            User={events.user}
            day={events.day}
            start={events.start}
            end={event.end}
            />
          </div>
        )
      })} */}
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      </div>
  );
}


export default EventList;