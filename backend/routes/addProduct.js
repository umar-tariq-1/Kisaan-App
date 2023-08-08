const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../middlewares/authorize");
const { addProductValidation } = require("../middlewares/addProductValidation");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ImageKit = require("imagekit");
const User = require("../models/user");
const product = require("../models/product");

const addProduct = express.Router();

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/umartariq/",
});

var locallyStoredImages = [];
var images = [];

// Create a storage configuration for multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e5);
    locallyStoredImages.push(uniqueSuffix + path.extname(file.originalname));
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Create the multer upload object

const upload = multer({ storage: storage });

addProduct.post(
  "/",
  authorize,
  /* addProductValidation, */
  upload.array("image", 4),
  async (req, res) => {
    try {
      const authorizedUser = getAuthorizedUser();
      const user = await User.findById(authorizedUser._id);

      const jsonData = JSON.parse(req.body.data);
      const { name, description, quantity, price, address } = jsonData;
      const imageKitResponses = [];

      for (let i = 0; i < locallyStoredImages.length; i++) {
        var imageFile = fs.readFileSync("./uploads/" + locallyStoredImages[i]);
        imagekit.upload(
          {
            file: imageFile,
            fileName: Math.round(Math.random() * 1e8).toString(),
            folder: "productImages",
          },
          (error, result) => {
            if (error) {
              console.log("Error uploading an image.\n");
              console.log(error);
            } else {
              images.push(result.name);
              console.log(result);
            }
          }
        );
      }

      if (
        name &&
        description &&
        quantity &&
        price &&
        address &&
        images &&
        (quantity === "Bulk" || quantity === "Few")
      ) {
        console.log(images);
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
          console.log(error);
          res.send({ message: "Internal server error" }).status(500); //500 indicates server side error
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

module.exports = addProduct;
