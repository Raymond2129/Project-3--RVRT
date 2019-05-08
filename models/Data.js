const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Data= new Schema(
  {
    map_id: {
      type:Object,
      required:true
    },
    town: {
      type:String,
      required:true
    },
    googleMap:{
      type: String
    },
    searchType:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    about:{
      type:String,
      required:false
    },
    link:{
      type:String,
      required:true
    },
    favorite:{
      type:String
    }

  },
  { timestamps:true }
);
module.exports = mongoose.model('Data', Data);
