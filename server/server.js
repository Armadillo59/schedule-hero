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
app.post("/event", eventController.createEvent, (req, res) => res.status(201).json(res.locals.eventCreated) )

// Signup
app.post("/user/signup", userController.createUser, (req, res) => res.status(201).json(res.locals.savedUser) );

// Login
app.post('/user/login', userController.verifyUser, (req, res) => {
  console.log('VERIFY USER: ', res.locals.success);
  return res.status(200).json({success: res.locals.success, userId: res.locals.id, userName: res.locals.userName});
});


// change data to db from FE /participant

// view data: retrieve from db and return to FE
    // GET - request: event name   
// app.get("/availableTimes", eventController.viewAvailableTimes, /* some logic function */ (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build')));

app.get("/events/:user", eventController.getEvents, (req, res) => {
  res.status(200).json(res.locals.userEvents)
});


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