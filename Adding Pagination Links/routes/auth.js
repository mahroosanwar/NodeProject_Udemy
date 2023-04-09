const express = require("express");

const authController = require("../controllers/auth");

const { check, body } = require("express-validator");

const User = require("../models/user");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter the Valid Email!")
      .normalizeEmail(),
    body("password", "Please enter the Valid Passowrd!")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter the Valid Email!")
      .custom((value, { req }) => {
        // if (value === "test@test.com") {
        //   throw new Error("This E-mail is forbidden");
        // }
        // return true;
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-mail exist already, Please pick different one!"
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      "password",
      "Please enter the password with only numbers and text at least 5 characters "
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passowrd have to Match!");
        }
        return true;
      })
      .trim(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
