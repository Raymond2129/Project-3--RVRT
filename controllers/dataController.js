

const db = require("../models/Data");
const axios = require("axios");

// Defining methods for DatasController
module.exports = {
  findAll: function(req, res) {
    db.Data
      .find(req.query)
      .sort({ town: -1 })
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Data
      .findById(req.params.id)
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Data
      .create(req.body)
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Data
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Data
      .findById({ _id: req.params.id })
      .then(dbData => dbData.remove())
      .then(dbData => res.json(dbData))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    const query = req.params.query;
    // console.log(queryURL);
    axios
      .get(query)
      .then(response => {
        // console.log(response.data.items);
        res.json(response.data.items);
      })
      .catch(err => res.status(422).json(err));
  }
};
