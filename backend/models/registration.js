const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, reqired: true },
  lastname: { type: String, reqired: true },
  email: { type: String, reqired: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
