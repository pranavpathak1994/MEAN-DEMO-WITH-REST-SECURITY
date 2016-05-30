var mongoose = require('mongoose');

var Contact = new mongoose.Schema({
  contactName: String,
  contactNumber: {type: Number},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('Contact', Contact);