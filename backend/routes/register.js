const express = require("express");
const validate = require("../validate");

const register = express.Router();

register.post("/", async (req, res) => {
  userData = {
    firstName: validate.capitalize(req.body.firstName.trim()),
    lastName: validate.capitalize(req.body.lastName.trim()),
    email: req.body.email.trim(),
    password: validate.capitalize(req.body.password.trim()),
    confirmpassword: validate.capitalize(req.body.confirmpassword.trim()),
  };
  const Error = validate.validate(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.password,
    userData.confirmpassword
  );
  if (Error) {
    res.status(403).send({ message: Error }); //403 indicates validation error
    return;
  }
  try {
    res.status(201).send({ message: "User registered successfully" }); //201 indicates successful creation
  } catch (error) {
    res.send({ message: "internal server error " }).status(500); //500 indicates server side error
  }
});

module.exports = register;
