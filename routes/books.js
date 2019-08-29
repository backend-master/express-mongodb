const express = require("express");
const Router = express.Router();

const bookController = require(`../controllers/bookController`);

Router.route("/")
  .post(bookController.createBook)
  .get(bookController.getAllBook);

Router.route("/:id").get(bookController.getBookById);

module.exports = Router;
