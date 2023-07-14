const express = require("express");
const { validate } = require("../validate");
const { capitalize } = require("../validate");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const register = express.Router();

register.post("/", async (req, res) => {
  if (
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.password &&
    req.body.confirmpassword
  ) {
    userData = {
      firstName: capitalize(req.body.firstName.trim()),
      lastName: capitalize(req.body.lastName.trim()),
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    };
  } else {
    res.status(403).send({ message: "Incomplete info entered" }); //403 indicates validation error
    return;
  }

  const Error = validate(
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

  const userExists = await User.findOne({ email: userData.email });
  if (userExists) {
    res.status(409).send({ message: "User already exists" });
    return;
    //409 indicates conflict in the request, in our case user already exists
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  userData = { ...userData, password: hashedPassword };

  const createdUser = new User({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
  });

  try {
    await createdUser.save();
    res.status(201).send({ message: "User registered successfully" }); //201 indicates successful creation
  } catch (error) {
    res.send({ message: "internal server error " }).status(500); //500 indicates server side error
    return;
  }
});

module.exports = register;
