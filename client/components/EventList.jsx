import React from 'react';
import Event from './Event';
import { useState, useEffect } from 'react';

//Usestate 

function EventList() {
  const { setState, updateState } = useState({})

  
  useEffect(()=>{

    const fetchEvent = async () =>{
      try {
        const response = await fetch('http://localhost:8080/events/pinta')
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
      {/* {setState.map(events=>{
        return (
          <div className='cardContainer'>
            <Event eventName={events.eventName}
            User={events.user}
            day={events.day}
            start={events.start}
            end={end}
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