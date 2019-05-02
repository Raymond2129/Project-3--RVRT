const express = require('express');
let Data = require ('../../db/models/Data');
const dataRoute = express.Router();



dataRoute.route('/') .get(function(req, res){
  Data.find(function(err, data){
    if (err){
      console.log(err,'ARGH, NoData');
    } else{
      res.json(data);
    }
  });
});
dataRoute.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Data.findById(id, function(err, data) {
      res.json(data);
  });
});

dataRoute.route('/add').post(function(req, res) {
  let data = new Data(req.body);
  data.save()
      .then(data => {
          res.status(200).json({'data': 'data added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new data failed');
      });
});
dataRoute.route('/update/:id').post(function(req, res) {
  Data.findById(req.params.id, function(err, data) {
      if (!data)
          res.status(404).send("data is not found");
      else
          data.map_id = req.body.map_id;
          data.town = req.body.town;
          data.search_type = req.body.search_type;
          data.name = req.body.name;
          data.about = req.body.about;
          data.link = req.body.link;
          data.save().then(data => {
              res.json('Data updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});
module.exports = dataRoute;
