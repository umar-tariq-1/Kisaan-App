const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  images: [
    {
      name: { type: String, required: true },
      _id: { type: String, required: true },
    },
  ],
  ratings: [{ type: Number, min: 1, max: 5, required: true, default: [] }],
  city: { type: String, required: true },
  address: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Product", productSchema);
