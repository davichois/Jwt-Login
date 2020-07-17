const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  user: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = model("User", userSchema);
