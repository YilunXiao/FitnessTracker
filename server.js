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

// Routes
// main route
// app.get('/', async (req, res) => {
//   // res.render('../public/index.html');
//   res.sendFile('/public/index.html');
// });

// exercise route
app.get('/exercise', async (req, res) => {
  // res.render('../public/index.html');
  res.sendFile(__dirname + '/public/exercise.html');
});

// stats route
app.get('/stats', async (req, res) => {
  // res.render('../public/index.html');
  res.sendFile(__dirname + '/public/stats.html');
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
