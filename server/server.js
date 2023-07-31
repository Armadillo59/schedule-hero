const express = require ('express');
const path = require('path')
const app = express();
const PORT = 3000;

const eventController = require('./controllers/eventController');
const userController = require('./controllers/userControllers');

const mongoose = require('mongoose');


require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.resolve(__dirname, '../build')));
}

// post data to db from FE /admin
app.post("/user", userController.createUser, (req, res) => res.status(201).json(res.locals.savedUser) ); // redirect to "/:user"
app.post("/event", eventController.createEvent, (req, res) => res.status(201).json(res.locals.eventCreated) );
// app.post("/event/submitAvailability", eventController.submitAvailability, (req, res) => res.status(201).json(res.locals.availabilitySubmitted) )

// change data to db from FE /participant

// view data: retrieve from db and return to FE
    // GET - request: event name   
// app.get("/availableTimes", eventController.viewAvailableTimes, /* some logic function */ (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build')));

app.get("/events/:user", eventController.getEvents, (req, res) => res.status(200).json(res.locals.userEvents)
);

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.resolve(__dirname, '../build')));
}

app.listen(PORT, ()=>{
    console.log('Listening on port 3000...')
})

module.exports = app;