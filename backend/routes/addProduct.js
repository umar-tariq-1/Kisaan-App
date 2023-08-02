const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const User = require("../models/user");
const product = require("../models/product");
const addProduct = express.Router();

addProduct.post("/", authorize, async (req, res) => {
  const authorizedUser = getAuthorizedUser();
  const user = await User.findById(authorizedUser._id);
  if (
    req.body.name &&
    req.body.description &&
    req.body.productQuantity &&
    req.body.price
  ) {
    const createdProduct = new product({
      name: req.body.name,
      description: req.body.description,
      productQuantity: req.body.productQuantity,
      price: req.body.price,
      creator: authorizedUser._id,
    });
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdProduct.save({ session: sess });
      user.products.push(createdProduct);
      await user.save({ session: sess });
      await sess.commitTransaction();
      res
        .status(201)
        .send({ message: "Product added successfully", createdProduct }); //201 indicates successful creation
    } catch (error) {
      res.send({ message: "internal server error" }).status(500); //500 indicates server side error
      return;
    }
  } else {
    res.send({ message: "Incomplete details entered." }).status(422); //500 indicates server side error
    return;
  }
});

module.exports = addProduct;
