const { where } = require("sequelize");
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

exports.update = (req, res) => {
  const id = req.title.id;

  Dream.update(req.body, { where: { id: id } })

    .then((num) => {
      if (num == 1) {
        res.send({
          message: "update succeed",
        });
      } else {
        res.send({
          message: `couldn't update dreams. id=${id} not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.title.id;

  Dream.delete({
    where: { id: id }
  })
    .then(num =>{
      if (num == 1){
        res.send({
          message: "Dream was deleted successfully!"
        });
      } else {
        res.send({
          message: `Dream was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the dream identified as=" + id
      });
    });
};
