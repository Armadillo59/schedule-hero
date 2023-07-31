const {Event, User} = require('../models/models.js')
// const User = require('../database/models.js')

const eventController = {};

// eventController.addUser = (req, res, next) => {}; - in the userController

eventController.createEvent = (req, res, next) => {
    const {eventName, eventDescription, userName, availability} = req.body;
    
    // First, check if the event already exists
    User.findOne( {userName: userName})
    .then((foundUser) => {
      Event.findOne({ eventName: eventName })
      .then((foundEvent) => {
        if (foundEvent) {
          // If the event exists, add the user as a participant and their availability
          foundEvent.participants.push({userName: userName, availability: availability});
  
          // Save the updated event
          foundEvent.save()
            .then((savedEvent) => {
                console.log('User added to existing event')
                // After adding user to the event, add it to the user's events
                User.updateOne(
                    { username: userName },
                    { $push: { events: savedEvent._id } }
                  ).then(() => console.log('Event added to user'));
            })
            .catch((error) => console.error('Error updating event:', error));
        } else {
          // If the event does not exist, create a new event
          const newEvent = new Event({
            eventName: eventName,
            participants: [{userName: userName, availability: availability}]
          });
  
          newEvent.save()
            .then((savedEvent) => {
              console.log('Event saved:', savedEvent);
  
              // After saving the event, add it to the user's events
              User.updateOne(
                { username: userName },
                { $push: { events: savedEvent._id } }
              ).then(() => console.log('Event added to user'));
            })
            .catch((error) => {
              console.error('Error saving event:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error finding event:', error);
      });
    }).catch((error) => {
      console.error('Error finding user:', error);
    });
   

};

eventController.getEvents = (req, res, next) => {
  const { user } = req.params;
  console.log(user)
  User.findOne({ username: user }).populate('events')
  .then(userEvents => {
    res.locals.userEvents = userEvents;
    return next()
  })
  .catch(error => {
    console.error('Error finding user:', error);
  });

};

// eventController.submitAvailability = (req, res, next) => { };

module.exports = eventController;



// Function to create a new event but with a check if it already exists
// function createEvent(eventName, participants, availability) 


// User = { 
//   _id1: {
//   username: Vitaly,
//   events: [Event_Id1, Event_Id2] 
//   },
//   _id2:{
//   username: Yahya,
//   events: [Event_Id1, Event_Id2] 
//   }
// };

// Event = {
//   _id1 : {
//     eventName:  'Project' ,
//     participants: [ 'Vitaly', 'Yahya'],
//     availability: {'Vitaly': [
//         { day: "Monday", start: "10:00", end: "12:00" },
//         { day: "Tuesday", start: "14:00", end: "16:00" },
//         { day: "Wednesday", start: "10:00", end: "12:00" },
//         { day: "Thursday", start: "14:00", end: "16:00" },
//         { day: "Friday", start: "10:00", end: "12:00" },
//         { day: "Saturday", start: "14:00", end: "16:00" },
//         { day: "Sunday", start: "10:00", end: "12:00" }
//       ], 'Yahya': [
//         { day: "Monday", start: "10:00", end: "12:00" },
//         { day: "Tuesday", start: "14:00", end: "16:00" },
//         { day: "Wednesday", start: "10:00", end: "12:00" },
//         { day: "Thursday", start: "14:00", end: "16:00" },
//         { day: "Friday", start: "10:00", end: "12:00" },
//         { day: "Saturday", start: "14:00", end: "16:00" },
//         { day: "Sunday", start: "10:00", end: "12:00" }
//       ]}
//   }
// }
