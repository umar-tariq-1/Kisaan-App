const jwt = require("jsonwebtoken");
const User = require("../models/user");

var authorizedUser;

module.exports.authorize = async (req, res, next) => {
  try {
    var token = req.cookies.token;
    if (!token) {
      return res.status(401).send({
        message: "No access token found. Login again!",
        isLoggedIn: false,
      });
    }
  } catch (err) {
    return res.status(401).send({
      message: "Didn't get cookies in request header",
      isLoggedIn: false,
    });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      res.status(401).send({
        message: "Request time out. Please login again!",
        isLoggedIn: false,
      });
      return;
    } else {
      const user = await User.findById(data.id);

      if (user) {
        authorizedUser = { ...user._doc };

        next();
      } else {
        return res
          .status(401)
          .send({ message: "Authorization failed", isLoggedIn: false });
      }
    }
  });
};

module.exports.getAuthorizedUser = () => {
  return authorizedUser;
};
