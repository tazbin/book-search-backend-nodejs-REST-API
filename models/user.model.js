// imports
const mongoose = require('mongoose');

const { Schema } = mongoose;

// shcema definition
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favouriteBooks: [{
        type: String
    }]
  });

  const User = mongoose.model('user', userSchema);
  
  // exports
  module.exports = {
      User
    };