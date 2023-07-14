const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authorization = express.Router();

authorization.post("/", async (req, res) => {
  try {
    var token = req.cookies.token;
    if (!token) {
      return res.status(401).send({ message: "No token found" });
    }
  } catch (err) {
    return res
      .status(401)
      .send({ message: "Didn't get cookies in request header" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      res
        .status(401)
        .send({ message: "Request time out. Please login again!" });
      return;
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.status(200).send({ authorizedUser: user, success: true });
      } else {
        return res.status(401).send({ message: "Authorization failed" });
      }
    }
  });
});

module.exports = authorization;
