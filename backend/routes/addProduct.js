const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const User = require("../models/user");
const product = require("../models/product");
const addProduct = express.Router();

addProduct.post("/", authorize, async (req, res) => {
  const authorizedUser = getAuthorizedUser();
  const user = await User.findById(authorizedUser._id);
  const { name, description, quantity, price, address, images } = req.body;

  //images storing logic and store images names in image variable as an array

  if (
    name &&
    description &&
    quantity &&
    price &&
    address &&
    images &&
    (quantity === "Bulk" || quantity === "Few")
  ) {
    const createdProduct = new product({
      name,
      description,
      quantity,
      price,
      address,
      images,
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
  } else if (quantity !== "Bulk" && quantity !== "Few") {
    res.send({ message: "Incorrect details entered." }).status(422);
    return;
  } else {
    res.send({ message: "Incomplete details entered." }).status(422);
    return;
  }
});

module.exports = addProduct;
