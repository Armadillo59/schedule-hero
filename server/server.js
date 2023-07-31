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
app.post("/event", eventController.createEvent, (req, res) => res.status(201).json(res.locals.eventCreated) )

// change data to db from FE /participant

// view data: retrieve from db and return to FE
    // GET - request: event name   
// app.get("/availableTimes", eventController.viewAvailableTimes, /* some logic function */ (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build')));

// app.get("/events/:user", eventController.getEvents, /* look for events available for this user - parameter: userID and returns array of events with time availability for all*/ (res, req) => {});


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred at Middleware' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return (res.status(errorObj.status).json(errorObj.message))
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;