const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  sentRequest: {
    type: Array,
    default: [],
  },
  recievedRequest: {
    type: Array,
    default: [],
  },
  contacts: {
    type: Array,
    default: [],
  },
  points: {
    type: Number,
    default: 0,
  },
  
});

module.exports = mongoose.model("Users", userSchema);
