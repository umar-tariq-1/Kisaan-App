const express = require("express");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const authorization = express.Router();

authorization.post("/dashboard", authorize, (req, res) => {
  const authorizedUser = getAuthorizedUser();
  // console.log(authorizedUser);
  delete authorizedUser.password;
  delete authorizedUser._id;

  return res.status(200).send({ authorizedUser, isLoggedIn: true });
});

authorization.post("/logout", authorize, (req, res) => {
  /* const authorizedUser = getAuthorizedUser();
  // console.log(authorizedUser);
  delete authorizedUser.password;
  delete authorizedUser._id; */
  return res
    .clearCookie("token", { httpOnly: true })
    .send({ message: "Logged out successfully!", isLoggedIn: false })
    .status(200);
});

module.exports = authorization;
