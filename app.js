const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Learning Express with NoSql (MongoDB)"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at server => ${PORT}`);
});
