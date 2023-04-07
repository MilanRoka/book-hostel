const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/
  },
  role: {
    type: String,
    enum: ["superadimn","admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("Users", UserSchema);