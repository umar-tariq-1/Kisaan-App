const mongoose = require("mongoose");

function connectToMongoDBAtlas(conn_URL, PORT) {
  mongoose
    .connect(conn_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        `Backend running on port: ${process.env.PORT} and Connected to Database...`
      );
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

module.exports = connectToMongoDBAtlas;
