const User = require('../database/models/models.js')


const userController = {
    // Function to create a new user
    createUser: function createUser(username) {
        const newUser = new User({
        username: username,
        // email: email,
        // password: password, // make sure to hash the password before saving
        events: []
        });
    
        newUser.save()
        .then((savedUser) => {
            console.log('User saved:', savedUser);
        })
        .catch((error) => {
            console.error('Error saving user:', error);
        });
    }
}

module.exports = userController;