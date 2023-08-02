const mongoose = require("mongoose");

function connectToMongoDBAtlas(conn_URL) {
  mongoose
    .connect(conn_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        `Backend running on port: ${
          process.env.PORT || 3001
        } and Connected to Database...`
      );
    })
    .catch((err) => {
      console.log("Error while connecting to Database...\n");
      return;
    });
}

module.exports = connectToMongoDBAtlas;
