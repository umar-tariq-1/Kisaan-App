const express = require("express");
const mongoose = require("mongoose");
const { authorize, getAuthorizedUser } = require("../../middlewares/authorize");
const {
  addProductValidation,
} = require("../../middlewares/addProductValidation");
const multer = require("multer");
const ImageKit = require("imagekit");
const User = require("../../models/user");
const product = require("../../models/product");

const addProduct = express.Router();

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// configure the multer
const storage = multer.memoryStorage();

// Create the multer upload object
const upload = multer({ storage });

addProduct.post(
  "/",
  authorize,
  upload.array("image", 4),
  addProductValidation,
  async (req, res) => {
    try {
      const authorizedUser = getAuthorizedUser();
      // const user = await User.findById(authorizedUser._id);
      const images = [];
      const imageKitErrors = [];
      const jsonData = JSON.parse(req.body.data);
      const { name, description, quantity, price, address, city } = jsonData;

      for (const file of req.files) {
        try {
          const response = await imagekit.upload({
            file: file.buffer,
            fileName: Math.round(Math.random() * 1e9).toString(),
            folder: "productImages",
            useUniqueFileName: false,
          });
          images.push({ name: response.name, _id: response.fileId });
        } catch (error) {
          imageKitErrors.push(error);
          for (const image of images) {
            await imagekit.deleteFile(image._id);
          }
          res.status(409).send({ message: error.message });
          console.log(error);
        }
      }

      if (
        name &&
        description &&
        quantity &&
        price &&
        address &&
        images &&
        city &&
        (quantity[0] === "B" || quantity[0] === "F")
      ) {
        // console.log(images);
        const createdProduct = new product({
          name,
          description,
          quantity: quantity[0],
          price,
          city,
          ratings: [],
          address,
          images,
          creator: authorizedUser._id,
        });

        var sess = await mongoose.startSession();
        try {
          sess.startTransaction();
          await createdProduct.save({ session: sess });
          await User.findByIdAndUpdate(
            authorizedUser._id,
            {
              $push: { products: createdProduct },
            },
            { session: sess }
          );
          // user.products.push(createdProduct);
          // await user.save({ session: sess });
          await sess.commitTransaction();
          const data = { ...createdProduct._doc };
          delete data._id;
          delete data.creator;
          delete data.__v;
          res.status(201).send({ message: "Product added successfully", data }); //201 indicates successful creation
        } catch (error) {
          console.log(error);
          await sess.abortTransaction();
          await sess.endSession();
          for (const image of images) {
            await imagekit.deleteFile(image._id);
          }
          res.status(500).send({ message: "Internal server error" }); //500 indicates server side error
          return;
        }
      } else {
        for (const image of images) {
          await imagekit.deleteFile(image._id);
        }
        res.status(422).send({ message: "Incomplete details entered" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

module.exports = addProduct;
