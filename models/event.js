let mongoose = require('mongoose');

module.exports = mongoose.model ('Event', {
  name: String, 
  location: String,
  time: String

})
