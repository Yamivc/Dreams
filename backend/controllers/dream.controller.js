// const { where } = require("sequelize");
const db = require("../models");
const Dream = db.dreams;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.description) {
    res.status(400).send({
      message: "Field required!",
    });
    return;
  }

  const dream = {
    title: req.body.title,
    description: req.body.description,
    feel: req.body.feel,
    img: req.body.img, //lógica para añadir imagenes
    date: req.body.date,
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
  const id = req.params.id;

  Dream.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Dream with id=${id} not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving dream with id=" + id,
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

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
  const id = req.params.id;

  Dream.destroy({
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
