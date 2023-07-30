const {Event, User} = require('../models/models.js')



const userController = {
    // Function to create a new user
    createUser: function createUser(req, res, next) {
        const { userName } = req.body
        const newUser = new User({
        username: userName,
        // email: email,
        // password: password, // make sure to hash the password before saving
        events: []
        });
    
        newUser.save()
        .then((savedUser) => {
            res.locals.savedUser=savedUser;
            console.log('User saved:', savedUser);
            return next()
        })
        .catch((error) => {
            console.error('Error saving user:', error);
        });
    }
}

module.exports = userController;