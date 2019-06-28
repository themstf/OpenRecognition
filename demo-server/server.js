const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


const authors = require("./authors");
router.use("/authors", authors);

const books = require("./books");
router.use("/books", books);

module.exports = router;