const mongoose = require('mongoose')

const userModel = mongoose.Schema({
      name : String,
      email : String,
      number : Number
})

module.exports = mongoose.model("Users", userModel);