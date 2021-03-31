const express = require("express");
const router = express.Router();
const authMiddleware = require("../helpers/authMiddleware");
const Operation = require("../models/Operations");
const User = require("../models/User");

//add new operation
router.post("/new_operation", authMiddleware, (req, res) => {
  let newOperation = new Operation({ ...req.body, owner: req.userId });
  newOperation
    .save()
    .then((operation) => res.status(200).send(operation))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});

//get user operation
router.get("/", authMiddleware, (req, res) => {
  Operation.find({ owner: req.userId })
    .then((operation) => res.send(operation))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});

//delete operation by id
router.delete("/:id", authMiddleware, (req, res) => {
  Operation.findByIdAndRemove({ _id: req.params.id })
    .then(() => res.send("Operation deleted successfuly"))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});

//edit operation by id
router.put("/update/:id", authMiddleware, (req, res) => {
  Operation.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    });
});

module.exports = router;
