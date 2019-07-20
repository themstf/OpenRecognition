const mongoose = require('mongoose');

const connections_schema = mongoose.Schema(
  {
    friendrequesting: {
      type: Number,
      required: true
    },

    frendshiprecieving: {
      type: Number,
      required: true
    },

    daterequesting: {
      type: Date,
      required: true,
    },

    dateapproving: {
      type: Date,
      required:true
    },

    daterejecting: {
      type: Date
    },

    active:{
      type: Boolean,
      required:true
    },

    user1approval:{
      type: Boolean,
      required: true
    },

    user2approval:{
      type: Boolean,
      required: true
    }
  }
);

module.exports = mongoose.model('connections', connections_schema);