const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToMongoDBAtlas = require("./connection");

const register = require("./routes/register");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;
const CONN_PASSWORD = "XukhxcDruTQuIBta";
const CONN_URL =
  "mongodb+srv://Umar:" +
  CONN_PASSWORD +
  "@kisaanappcluster.c2ty0wa.mongodb.net/KisaanApp?retryWrites=true&w=majority";

connectToMongoDBAtlas(CONN_URL, PORT);

app.listen(PORT);

app.use("/register", register);
