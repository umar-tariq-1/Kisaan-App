const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.status(201).send({ message: "User registered successfully" }); //201 indicates successful creation
  } catch (error) {
    res.send({ message: "internal server error " }).status(500); //500 indicates server side error
  }
});

module.exports = router;
