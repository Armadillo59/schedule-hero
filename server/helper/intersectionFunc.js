// Data visualization
/*
availability: {
  Monday: {start: 10.00, end: 20.00},
  Tuesday: {start: 10.00, end: 20.00},
  Wednesday: {start: 10.00, end: 20.00}, 
}

*/
// mond
// monc

const EventSchema = new mongoose.Schema({
  eventName: { type: String, unique: true },
//   eventDescription: String,
//   eventDate: Date,
//   participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  participants: [
    {
      userName: {type: String, ref: 'User'},
      availability: Object
    },
    {
      userName1: {type: String, ref: 'User'},
      availability: Object
    },
  ],
  worksForEverbody: Object
});

function overlapFunc(participants){
    //participants wiill look like above
    
    // we want to creat a result object with monday through sunday where we 
    //iterate through participants and check if the their start and end time of each day is outside or within the current range of the intersection array 
    // availability: {
    //   Monday: {start: 10.00, end: 20.00},
    //   Tuesday: {start: 10.00, end: 20.00},
    //   Wednesday: {start: 10.00, end: 20.00}, 
    // }

}