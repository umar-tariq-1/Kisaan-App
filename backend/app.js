const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToMongoDBAtlas = require("./utils/DBconnection");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const addProduct = require("./routes/addProduct");

const app = express();

app.use("*", cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/register", register);
app.use("/login", login);
app.use("/logout", logout);
app.use("/addProduct", addProduct);

const PORT = process.env.PORT || 3001;
const CONN_URL = process.env.DB_CONN_URL;

connectToMongoDBAtlas(CONN_URL);

app.listen(PORT);
