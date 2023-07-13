const express = require("express");

const router = express.Router();

// DUMMY_DATA = [
//   {
//     id: "p1",
//     description: "This is first place",
//   },
//   {
//     id: "p2",
//     description: "This is second place",
//   },
//   {
//     id: "p3",
//     description: "This is third place",
//   },
// ];

// router.get("/:pid", (req, res, next) => {
//   const enteredId = req.params.pid;
//   const place = DUMMY_DATA.find((p) => {
//     return p.id === enteredId;
//   });
//   res.json({ place });
// });

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).send({ message: "User registered successfully" }); //201 indicates successful creation
  } catch (error) {
    console.log(error);
    res.send({ message: "internal server error " }).status(500); //500 indicates server side error
  }
});

module.exports = router;
