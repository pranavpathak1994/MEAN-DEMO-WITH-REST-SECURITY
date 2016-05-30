var mongoose = require('mongoose');

var User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password : String
});

mongoose.model('User', User);