const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { createToken } = require("../utils/token");

const login = express.Router();

function validate(Email, Password) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
    return "Invalid Email";
  } else if (!Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    return "Incorrect Password";
  } else {
    return undefined;
  }
}

login.post("/", async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      loginData = {
        email: req.body.email.toLowerCase().trim(),
        password: req.body.password,
      };
    } else {
      res
        .status(403)
        .send({ message: "Incomplete info entered", isLoggedIn: false }); //403 indicates validation error
      return;
    }

    const Error = validate(loginData.email, loginData.password);
    if (Error) {
      res.status(403).send({ message: Error, isLoggedIn: false }); //403 indicates validation error
      return;
    }

    const foundUser = await User.findOne({ email: loginData.email });

    if (!foundUser) {
      return res
        .status(401)
        .send({ message: "No user exists with entered Email" });
    }

    const validPassword = await bcrypt.compare(
      loginData.password,
      foundUser.password
    );

    if (!validPassword) {
      return res
        .status(401)
        .send({ message: "Incorrect Password", isLoggedIn: false });
    }

    var loggedInUser = { ...foundUser._doc };
    delete loggedInUser.password;
    delete loggedInUser._id;
    const token = createToken(foundUser._id);
    var cookieExpirationDate = new Date(Date.now() + 3600000);
    //console.log(token);
    res.cookie("token", token, {
      withCredentials: true,
      secure: true,
      httpOnly: true,
      expires: cookieExpirationDate,
    });

    res.status(200).send({
      message: "LoggedIn successfully!",
      loggedInUser,
      isLoggedIn: true,
      cookieExpirationDate: `${cookieExpirationDate.toDateString()} ${cookieExpirationDate.getHours()}:${cookieExpirationDate.getMinutes()}:${cookieExpirationDate.getSeconds()}`,
    });
    //console.log(token);
  } catch (err) {
    console.log(err);
  }
});

module.exports = login;
