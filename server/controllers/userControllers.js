const { User } = require('../models/models.js')
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
        const { userName, password } = req.body;
        const newUser = new User({
        userName: userName,
        password: password,
        // email: email,
        password: password, // make sure to hash the password before saving
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

userController.verifyUser = (req, res, next) => {
    const validatePassword = async (plaintextPassword, hash) => {
      const validated =  await bcrypt.compare(plaintextPassword, hash);
      console.log('validated: ', validated);
      return validated;
    }
  
    const {userName, password} = req.body;
  
    User.findOne({
      userName: userName
    })
      .then(async (data) => {
        console.log(data);
        // Username not found
        if (data === null) {
          res.locals.success = false;
        } 
        else {
          const validated = await validatePassword(password, data.password);
  
          if (validated) {
            console.log('Password validated!');
            res.locals.success = true;
            res.locals.id = data._id;
          }
          else {
            res.locals.success = false;
          }
        }
        return next();
      })
      .catch((err) => {
        return next(err);
      })
  };

module.exports = userController;