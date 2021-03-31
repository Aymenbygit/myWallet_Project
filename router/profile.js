const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_key = process.env.SECRET_KEY;
const authMiddleware = require("../helpers/authMiddleware");

// PUT : EDIT A USER BY ID
router.put( "/:id",
  [
    body("first_name", "FirstName must contain only alphabetic and not empty")
      .isString()
      .isLength({
        min: 2,
      }),
    body("last_name", "LastName must contain only alphabetic and not empty")
      .isString()
      .isLength({
        min: 2,
      }),
    body("birth_day", "Please enter a valid date").isDate(),
    body("adress", "LastName must contain only alphabetic").isString(),
    body("phone", "Phone must contain exaclty 8 numbers").isLength(8),
    body("email", "Please enter a valid Email").isEmail(),
    body("password", "Password length must be 5 characters at least").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,msg)=> {
        err ? console.log(err) : res.json({msg:'user was updated'})
    })
  }
);

module.exports = router;
