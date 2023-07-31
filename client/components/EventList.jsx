import React from 'react';
import Event from './Event';
import { useState, useEffect } from 'react';

//Usestate 

function EventList() {
  const [ currentState, updateState ] = useState(null)

  
  
  useEffect(()=>{

    const fetchEvent = async () =>{
      try {
        const response = await fetch('/events/anyboyd')
        const data = await response.json();
        console.log('data',data)
      updateState(data);
      }catch (err){
        console.log(` ${err}`)
      }
    }
    fetchEvent();
  }, [])
   //[] dependancies for when it will fire again    

  console.log('This is current state',currentState);

  //const days = Object.keys(currentState.events[0].participants[0].availability).map((day)=> day)
  // const starts = Object.keys(currentState.events[0].participants[0].availability).map((day)=> day.start);
  // const ends = Object.keys(currentState.events[0].participants[0].availability).map((day)=> day.end);

  return (
      // <Event key={index}   />
      <div className='cardContainer'>
          <div>
          <Event
          user={ currentState ? currentState.userName : ''}
          eventName = {
            currentState ? 
              currentState.events[0].eventName : ''
          }

          participants = {currentState ? 
            currentState.events[0].participants[0].userName : ''
          }
          
          //{currentState ? 

          //day= {days}
        day = {currentState ? Object.keys(currentState.events[0].participants[0].availability).map((day)=> day) : ''}

         start = {currentState ? Object.keys(currentState.events[0].participants[0].availability).map((day)=>currentState.events[0].participants[0].availability[day].start) : ''}
      
         end = {currentState ? Object.keys(currentState.events[0].participants[0].availability).map((day)=>currentState.events[0].participants[0].availability[day].end) : ''}
        //}
          // day = {days}
          // start = {starts}
          // end = {ends}
  
          />
          </div>
    

      </div>
  );
}


export default EventList;