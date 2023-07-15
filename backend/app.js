const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToMongoDBAtlas = require("./utils/DBconnection");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const register = require("./routes/register");
const login = require("./routes/login");
const authorization = require("./routes/authorization");

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/register", register);
app.use("/login", login);
app.use("/", authorization);

const PORT = process.env.PORT;
const CONN_URL = process.env.DB_CONN_URL;

connectToMongoDBAtlas(CONN_URL);

app.listen(PORT);
