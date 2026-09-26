

const express = require("express");
const AuthRouter = express.Router();

AuthRouter
.route("/user/signup",authController.signup);