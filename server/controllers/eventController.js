const {Event, User} = require('../models/models.js')
// const User = require('../database/models.js')
const overlapFunc = require('../helperFuncs/overlap.js')
const eventController = {};

// eventController.addUser = (req, res, next) => {}; - in the userController

eventController.createEvent = (req, res, next) => {
    const {eventName, eventDescription, userName, availability} = req.body;
    
    // First, check if the event already exists and join user to even
    User.findOne( {userName: userName})
    .then(() => {
      Event.findOne({ eventName: eventName })
      .then((foundEvent) => {
        if (foundEvent) {
          // If the event exists, add the user as a participant and their availability
          foundEvent.participants.push({userName: userName, availability: availability});

          //added func that updates the intersection availability data in the DB
          console.log(foundEvent.participants);
          const intersection = overlapFunc(foundEvent.participants)
          foundEvent.worksForEverybody = intersection;
          console.log(foundEvent.worksForEverybody);
          // Save the updated event
          foundEvent.save()
            .then((savedEvent) => {
                console.log('User added to existing event')
                // After adding user to the event, add it to the user's events
                User.updateOne(
                    { userName: userName },
                    { $push: { events: savedEvent._id } }
                  ).then(() => console.log('Event added to user'));
            })
            .catch((error) => console.error('Error updating event:', error));
        } else {
          // If the event does not exist, create a new event
          const newEvent = new Event({
            eventName: eventName,
            participants: [{userName: userName, availability: availability}],
            worksForEverybody: []
          });
          
          const intersection = overlapFunc(newEvent.participants)

          newEvent.worksForEverybody = intersection

          newEvent.save()
            .then((savedEvent) => {
              console.log('Event saved:', savedEvent);
  
              // After saving the event, add it to the user's events
              User.updateOne(
                { userName: userName },
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
  console.log(user);
  
  User.findOne({ userName: user }).populate('events')
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


