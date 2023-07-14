const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToMongoDBAtlas = require("./DBconnection");
const env = require("dotenv").config();

const register = require("./routes/register");
const login = require("./routes/login");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", register);
app.use("/login", login);

const PORT = process.env.PORT;
const PASSWORD = process.env.DB_PASSWORD;
const ADMIN = process.env.DB_ADMIN;
const CONN_URL = `mongodb+srv://${ADMIN}:${PASSWORD}@kisaanappcluster.c2ty0wa.mongodb.net/KisaanApp?retryWrites=true&w=majority`;

connectToMongoDBAtlas(CONN_URL);

app.listen(PORT);
