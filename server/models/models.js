const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://yahyatalab1:fairies@cluster0.tbowj6z.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });


// Define User Schema
const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
//   email: String,
//   password: String,
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

// Define Event Schema
const EventSchema = new mongoose.Schema({
  eventName: { type: String, unique: true },
//   eventDescription: String,
//   eventDate: Date,
//   participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  participants: [{
      userName: {type: String, ref: 'User'},
      availability: Object
    }],
  // availability: Object
});

// Define User and Event Models
const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);



module.exports = { User, Event };
