const mongoose = require('mongoose');

const profiles_schema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },

    last_name: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },
    
    username: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: 'Email address is required',
      lowecase: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer."
      ]
    },

    active:{
      type: Boolean
    },

    photo:{
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('profiles', profiles_schema);