// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

// PORT
const PORT = process.env.PORT || 3000;

// Database model
// const User = require("./model.js");
// setup express app
const app = express();
// MIDDLEWARE
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// Server routes
app.use(require('./controller/routes.js'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
