const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const register = require("./routes/register");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", register);

app.listen(3001);
