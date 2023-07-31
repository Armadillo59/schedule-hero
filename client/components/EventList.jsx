import React from 'react';
import Event from './Event';

function EventList() {
  // const dummyEventList = [];
  // for (let i = 0; i < 5; i++) dummyEventList.push(<Event key={crypto.randomUUID()}/>);
  return (
      // {dummyEventList}
      <Event />
  );
}


export default EventList;