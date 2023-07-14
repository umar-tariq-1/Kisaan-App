const express = require("express");
const bcrypt = require("bcrypt");

const login = express.Router();

function validate(Email, Password) {}

login.post("/", async (req, res) => {
  const loginData = {
    email: req.body.email.toLowerCase().trim(),
    password: req.body.password,
  };
});

module.exports = login;
