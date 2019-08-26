# Simple Express With MongoDb

Install needed requirement using npm :

```sh
npm install
```

or using yarn :

```sh
yarn
```

# Step By Step

1. Install MongoDB and then start the service
2. Connect our app with mongo :

```sh
const mongoose = require("mongoose");
const HOST = process.env.HOST;

mongoose.connect(HOST, {
  useNewUrlParser: true
});
```

HOST is usualy : mongodb://localhost/demodb

`demodb` will create automatically or will be used if this database is exist

3. Define our models schema:

```sh
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
```

4. Make for models controller :

```sh
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
  }
```

5. Add to your route :

```sh
Router.route("/")
  .post(userController.createUser)
  .get(userController.getAllUser);
```

6. And then call your API, with starting your server :

```sh
yarn dev
```

# Reference

1. [Mongoose Documentation](https://mongoosejs.com/docs/)
2. [MongoDB Documentation](https://tecadmin.net/tutorial/mongodb)
3. [Install MongoDB](https://tecadmin.net/tutorial/docs/mongodb/installation/)
