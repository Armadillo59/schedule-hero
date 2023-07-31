const { User } = require('../models/models.js')

const userController = {};

userController.createUser = (req, res, next) => {
        const { userName, password } = req.body;
        const newUser = new User({
        userName: userName,
        password: password,
        // email: email,
        // password: password, // make sure to hash the password before saving
        events: []
        });
    
        newUser.save()
        .then((savedUser) => {
            res.locals.savedUser = savedUser;
            console.log('User saved:', savedUser);
            return next();
        })
        .catch((err) => {
            // console.error('Error saving user:', err);
            return next(err)
        });
    }

module.exports = userController;