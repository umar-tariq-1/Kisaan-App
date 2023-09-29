const express = require("express");
const cors = require("cors");
const connectToMongoDBAtlas = require("./utils/DBconnection");
require("dotenv").config();
const cookieParser = require("cookie-parser");

//User routes
const register = require("./routes/User/register");
const login = require("./routes/User/login");
const logout = require("./routes/User/logout");

//Product routes
const addProduct = require("./routes/Product/addProduct");
const getProducts = require("./routes/Product/getProducts");

const app = express();

// app.use("*", cors({ origin: true, credentials: true }));
app.use(
  "*",
  cors({
    origin: process.env.ORIGIN || true,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//User routes
app.use("/register", register);
app.use("/login", login);
app.use("/logout", logout);

//Product routes
app.use("/addProduct", addProduct);
app.use("/getProducts", getProducts);

const PORT = process.env.PORT || 3001;
const CONN_URL = process.env.DB_CONN_URL;

//DB connection and listening to port
(async () => {
  await connectToMongoDBAtlas(CONN_URL);
  app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}...`);
  });
})();
