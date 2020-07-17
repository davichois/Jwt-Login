const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const authSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

authSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

authSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("Auth", authSchema);
