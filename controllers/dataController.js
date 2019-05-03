const db = require("../models/Data");
const axios = require("axios");


module.exports ={
  findAll:function(req, res){
    db.Data
      .find(req,query)
      .sort({town: -1 })
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  findById:function(req, res){
    db.Data
      .findById(req,params.id)
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  create:function(req, res){
    db.Data
      .create(req,body)
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  update:function(req, res){
    db.Data
      .findOneAndUpdate({_id:req.params.id}, req,body)
      .sort({town: -1 })
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  remove:function(req, res){
    db.Data
      .findById({_id:req.params.id})
      .then(dbData => dbData.remove())
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
};
  // search:function(req,res){
  //   db.Data
  //     .search('/update/:id').post(function(req, res) {
  //         data.map_id = req.body.map_id;
  //         data.town = req.body.town;
  //         data.search_type = req.body.search_type;
  //         data.name = req.body.name;
  //         data.about = req.body.about;
  //         data.link = req.body.link;
  //         data.save().then(data => {
  //             res.json('Data updated!');
  //         })
  //         .catch(err => {
  //             res.status(400).send("Update not possible");
  //         });
  //     });
  //   }


