const express = require("express");
const Router = express.Router();

const userController = require("../controllers/userController");

Router.route("/")
  .post(userController.createUser)
  .get(userController.getAllUser);

module.exports = Router;
