const Book = require("../models/bookModel");

module.exports = {
  createBook: async (req, res) => {
    try {
      const { title, author } = req.body;
      const newBook = { title, author };
      let book = new Book(newBook);

      await book.save().then(result => {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: result
        });
      });
    } catch (err) {
      res.status(500).json({
        err: true,
        errMessage: err,
        data: []
      });
    }
  },

  getAllBook: async (req, res) => {
    try {
      await Book.find()
        .exec()
        .then(result => {
          res.status(200).json({
            err: false,
            errMessage: null,
            data: result
          });
        });
    } catch (err) {
      res.status(500).json({
        err: true,
        errMessage: err,
        data: []
      });
    }
  },

  getBookById: async (req, res) => {
    try {
      const id = req.params.id;

      await Book.findById(id, (err, result) => {
        if (err) res.status(500), send(err);
        res.status(200).json({
          err: false,
          errMessage: null,
          data: result
        });
      });
    } catch (err) {
      res.status(500).json({
        err: true,
        errMessage: err,
        data: []
      });
    }
  }
};
