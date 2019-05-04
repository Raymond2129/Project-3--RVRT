const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Data = new Schema(
  {
    map_id: {
      type:Object,
      required:true
    },
    town: {
      type:String,
      required:true
    },
    search_type:{
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

  },
  { timestamps:true }
);
module.exports = Data = mongoose.model('data', DataSchema);
