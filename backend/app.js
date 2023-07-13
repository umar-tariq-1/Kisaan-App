const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const register = require("./routes/register");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", register);

const CONN_PASSWORD = "XukhxcDruTQuIBta";
const CONN_URL =
  "mongodb+srv://Umar:" +
  CONN_PASSWORD +
  "@kisaanappcluster.c2ty0wa.mongodb.net/users?retryWrites=true&w=majority";

mongoose
  .connect(CONN_URL)
  .then(() => {
    console.log("Backend running on port: 3001");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
