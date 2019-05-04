
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
// const routes = require('./routes');
const app = express();

// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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
    { useNewUrlParser: true },

  )

    .then(() => console.log("MongoDB successfully 🔗connected"))
    .catch(err => console.log(err));
  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require("./config/passport")(passport);
  // Routes
  app.use("/api/users", users);

    const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server port ⚓️ ${port}`));
// fa016130-5e58-41ed-9c29-f0bb0a77a845
