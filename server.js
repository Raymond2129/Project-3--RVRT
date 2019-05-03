
const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes');
const config = require('config');
const app = express();

// Bodyparser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));
// }
  // app.use(routes);
//  DB config
  const db = require("./config/keys").mongoURI;

// Connect to local mongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
    const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
// fa016130-5e58-41ed-9c29-f0bb0a77a845
