const User = require("../models/userModel");

module.exports = {
  createUser: async (req, res) => {
    try {
      const { firstname, lastname, address } = req.body;
      const newData = { firstname, lastname, address };

      let user = new User(newData);

      const data = await user.save().then(result => {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: user
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

  getAllUser: async (req, res) => {
    try {
      const data = await User.find()
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

  getUserById: async (req, res) => {
    try {
      const id = req.params.id;

      const data = await User.findById(id).exec();
      res.status(200).json({
        err: false,
        errMessage: null,
        data: {
          id: data.id,
          ...data.toJSON()
        }
      });
    } catch (err) {
      res.status(500).json({
        err: true,
        errMessage: err,
        data: []
      });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const { firstname, lastname, address } = req.body;
      const updateData = { firstname, lastname, address };

      await User.findByIdAndUpdate(
        id,
        updateData,
        { new: true },
        (err, result) => {
          if (err) return res.status(500).send(err);
          return res.status(200).json({
            err: false,
            errMessage: null,
            data: result
          });
        }
      );
    } catch (err) {
      res.status(500).json({
        err: true,
        errMessage: err,
        data: []
      });
    }
  }
};
