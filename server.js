const MONGODB_URI = require ('.env');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('config');
const app = express();
const PORT = process.env.PORT || 5000;

// Bodyparser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
}

app.use(routes);
// Connect to local mongoDB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/RVRT", {useNewUrlParser:true,useCreateIndex:true});
  console.log(databaseUri);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// DB Config
// const db = config.get('mongoURI');
// // const db = "mongodb://localhost";

// // Connect to Mongo
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true
//   }) // Adding new mongo url parser
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

// Use Routes
// app.use('/api/items', require('./routes/api/items'));
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/data', require('./routes/api/data'));

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// fa016130-5e58-41ed-9c29-f0bb0a77a845
