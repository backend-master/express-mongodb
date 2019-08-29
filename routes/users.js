const express = require("express");
const Router = express.Router();

const userController = require("../controllers/userController");

Router.route("/")
  .post(userController.createUser)
  .get(userController.getAllUser);

Router.route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = Router;
