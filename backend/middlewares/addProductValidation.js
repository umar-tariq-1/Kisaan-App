module.exports.addProductValidation = (req, res, next) => {
  //   const jsonData = req.body;
  console.log(req.body.data);
  const { name, description, quantity, price, address } = jsonData;

  if (!(name && description && quantity && price && address && files)) {
    return res.send({ message: "Incomplete details entered" }).status(422);
  } else if (
    name.trim() === "" ||
    description.trim() === "" ||
    quantity.trim() === "" ||
    address.trim() === ""
  ) {
    return res.send({ message: "There must be no empty field" }).status(422);
  } else if (Number(price) < 1) {
    return res.send({ message: "Price cannot be 0 or negative" }).status(422);
  } else if (quantity !== "Bulk" && quantity !== "Few") {
    return res.send({ message: "Incorrect quantity entered" }).status(422);
  } else if (!files || files.length === 0) {
    return res
      .status(400)
      .json({ error: "Please upload atleast one valid image file" });
  } else if (files.length > 4) {
    return res
      .status(400)
      .json({ error: "Please upload atmost four valid image files" });
  }
  next();
};
