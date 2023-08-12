const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const User = require("../models/user");
const product = require("../models/product");

const getProducts = express.Router();

getProducts.get("/", authorize, async (req, res) => {
  const authorizedUser = getAuthorizedUser();
});

module.exports = getProducts;
