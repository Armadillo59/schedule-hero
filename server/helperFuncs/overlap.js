// i: array of objects - [ { user1: {some data}, availability: { Tuesday: {start: 10.00, end: 16.00}  } }]
// o: objecct of overlapping times - {Tuesday: {start: 10.00, end: 16.00}}
function overlapFunc(participants) {
  //participants wiill look like above
  if (participants.length === 1) return participants[0].availability;
  
  const overlapTimes = {};

  for (let day in participants[0].availability) {
    let continueLoop = true;
    let startTimesArray = [];
    let endTimesArray = [];
    startTimesArray.push(participants[0].availability[day].start);
    endTimesArray.push(participants[0].availability[day].end);
    for (let i = 1; i < participants.length; i++) {
      if (!participants[i].availability[day]) {
        continueLoop = false;
        break;
      }

      startTimesArray.push(participants[i].availability[day].start);
      endTimesArray.push(participants[i].availability[day].end);
    }
    if (continueLoop) {
      let startTime = Math.max(...startTimesArray);
      let endTime = Math.min(...endTimesArray);
      if (endTime > startTime) {
        overlapTimes[day] = {};
        overlapTimes[day].start = startTime;
        overlapTimes[day].end = endTime;
      }
    }
  }

  return Object.keys(overlapTimes).length !== 0 ? overlapTimes : 'There is no overlap in times among participants';
};

module.exports = overlapFunc;



// Test cases ---------------
// const participants = [
//   {
//     user1: {type: String, ref: 'User'},
//     availability: {
//       Monday: {start: 10.00, end: 15.00},
//       Tuesday: {start: 10.00, end: 16.00},
//       Wednesday: {start: 10.00, end: 14.00}, 
//     }
//   },
//   {
//     user2: {type: String, ref: 'User'},
//     availability: {
//       Monday: {start: 11.00, end: 20.00},
//       Tuesday: {start: 11.00, end: 20.00},
//       Wednesday: {start: 11.00, end: 20.00}, 
//     }
//   },
//   {
//     user3: {type: String, ref: 'User'},
//     availability: {
//       Friday: {start: 9.00, end: 14.00},
//       Tuesday: {start: 9.00, end: 14.00},
//       Thursday: {start: 9.00, end: 14.00}, 
//     }
//   },
// ]

// const participants1 = [
//   {
//     user1: {type: String, ref: 'User'},
//     availability: {
//       Monday: {start: 10.00, end: 15.00},
//       Tuesday: {start: 10.00, end: 16.00},
//       Wednesday: {start: 10.00, end: 12.00}, 
//     }
//   },
//   {
//     user2: {type: String, ref: 'User'},
//     availability: {
//       Monday: {start: 11.00, end: 20.00},
//       Tuesday: {start: 11.00, end: 20.00},
//       Wednesday: {start: 11.00, end: 20.00}, 
//     }
//   },
//   {
//     user3: {type: String, ref: 'User'},
//     availability: {
//       Friday: {start: 9.00, end: 14.00},
//       Tuesday: {start: 9.00, end: 14.00},
//       Wednesday: {start: 9.00, end: 10.00}, 
//     }
//   },
// ]

// const participants2 = [
//   {
//     user1: {type: String, ref: 'User'},
//     availability: {
//       Monday: {start: 10.00, end: 15.00},
//       Tuesday: {start: 10.00, end: 16.00},
//       Wednesday: {start: 10.00, end: 14.00}, 
//     }
//   },
// ]

// console.log(overlapFunc(participants));
// console.log(overlapFunc(participants1));
// console.log(overlapFunc(participants2));


// mond
// monc

// const EventSchema = new mongoose.Schema({
//   eventName: { type: String, unique: true },
// //   eventDescription: String,
// //   eventDate: Date,
// //   participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   participants: [
//     {
//       user1: {type: String, ref: 'User'},
//       availability: {
//         Monday: {start: 10.00, end: 15.00},
//         Tuesday: {start: 10.00, end: 16.00},
//         Wednesday: {start: 10.00, end: 14.00}, 
//       }
//     },
//     {
//       user2: {type: String, ref: 'User'},
//       availability: {
//         Monday: {start: 11.00, end: 20.00},
//         Tuesday: {start: 11.00, end: 20.00},
//         Wednesday: {start: 11.00, end: 20.00}, 
//       }
//     },
//     {
//       user3: {type: String, ref: 'User'},
//       availability: {
//         Friday: {start: 9.00, end: 14.00},
//         Tuesday: {start: 9.00, end: 14.00},
//         Thursday: {start: 9.00, end: 14.00}, 
//       }
//     },
//   ],
//   worksForEverbody: Object
// });


  // for (let participant of participants) {
  //   const day = {};
  // }
    // we want to creat a result object with monday through sunday where we 
    //iterate through participants and check if the their start and end time of each day is outside or within the current range of the intersection array 
    // availability: {
    //   Monday: {start: 10.00, end: 20.00},
    //   Tuesday: {start: 10.00, end: 20.00},
    //   Wednesday: {start: 10.00, end: 20.00}, 
    // }
