const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const multer = require("multer");
const path = require("path");
const User = require("../models/user");
const product = require("../models/product");
const addProduct = express.Router();

// Create a storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Use Date.now() to ensure a unique filename for each image
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e5);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
// Create the multer upload object
const upload = multer({ storage: storage });

addProduct.post("/", authorize, upload.array("image", 4), async (req, res) => {
  const files = req.files;
  if (!files || files.length === 0) {
    return res
      .status(400)
      .json({ error: "Please upload atleast one valid image file." });
  }
  if (files.length > 4) {
    return res
      .status(400)
      .json({ error: "Please upload atmost four valid image file." });
  }
  // Process the uploaded images and save them// In this example, we're simply sending back the filenames as a response
  const uploadedImages = files.map((file) => file.filename);
  res.status(200).json({ images: uploadedImages });

  /* const authorizedUser = getAuthorizedUser();
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
  } */
});

module.exports = addProduct;
