const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const route1 = require("./routes/route1");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", route1);

app.listen(3001);
