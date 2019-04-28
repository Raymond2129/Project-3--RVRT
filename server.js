const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());


// Connect to local mongoDB

const databaseUri= "mongodb://localhost/RVRT";

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
}
if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}else{
  mongoose.connect(databaseUri);
}
console.log(databaseUri);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
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
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
// fa016130-5e58-41ed-9c29-f0bb0a77a845
