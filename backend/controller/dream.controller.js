const db = require("../models");
const Dream = db.dreams;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.title.description) {
    res.status(400).send({
      message: "Field required!",
    });
    return;
  }

  const dream = {
    title: req.body.title,
    description: req.body.description,
    feel: body.feel,
  };

  Dream.create(dream)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error couldn't create your dream",
      });
    });
};

exports.findAll = (req, res) => {
  Dream.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error couldn't retrieve any dream",
      });
    });
};

 exports.findOne = (req, res) => {

};

exports.update = (req, res) => {
  

 
};

exports.delete = (req, res) => {};
