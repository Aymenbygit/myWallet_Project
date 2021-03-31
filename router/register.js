const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_key = process.env.SECRET_KEY;
const authMiddleware = require("../helpers/authMiddleware");

//Register User
router.post(
  "/",
  [
    body("first_name", "FirstName must contain only alphabetic and not empty").isString().isLength({
      min: 2,
    }),
    body("last_name", "LastName must contain only alphabetic and not empty").isString().isLength({
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
    User.find({ email: req.body.email }).then((users) => {
      if (users.length) {
        return res
          .status(400)
          .send({ errors: [{ msg: "User already exists!" }] });
      }
      let newUser = new User(req.body);
      //crypt password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err;
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
          if (err) {
            throw err;
          }
          newUser.password = hashedPwd;
          //save in db
          newUser.save();
          //generer token
          let payload = {
            userId: newUser._id,
          };
          jwt.sign(payload, secret_key, (err, token) => {
            if (err) {
              throw err;
            }
            res.send({ token });
          });
        });
      });
    });
  }
);

module.exports = router;
