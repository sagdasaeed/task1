
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

/*const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.insert = (req, res) => {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const users = {
      username: req.body.username,
      email: req.body.email,
      cridt: req.body.cridt ,
      pass:req.body.pass,
      repass:req.body.repass
    };
  
    // Save Tutorial in the database
    Users.create(users)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while inserting."
        });
      });
  };


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Users.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete user with id=${id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };*/
/*
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };*/
/*
const responseHandler = require('../config/response.handler').handleResponse;
 
const user=require('../modules/users/model.js')



exports.list = (req, res) => {

    user.list(req, res).then((result) => {

        return responseHandler(res, result.status, result.message, result.data);

    }).catch((err) => {

            return responseHandler(res, err.status, err.message, err.data);
     });
};



exports.insert = (req, res) => {

    user.insert(req, res).then((result) => {

        return responseHandler(res, result.status, result.message, result.data);

    }).catch((err) => {

            return responseHandler(res, err.status, err.message, err.data);
     }); 
     
};
exports.ins = (req, res) => {

    user.ins(req, res).then((result) => {

        return responseHandler(res, result.status, result.message, result.data);

    }).catch((err) => {

            return responseHandler(res, err.status, err.message, err.data);
     }); 
     
};



exports.update = (req, res) => {

    user.update(req, res).then((result) => {

        return responseHandler(res, result.status, result.message, result.data);

    }).catch((err) => {

            return responseHandler(res, err.status, err.message, err.data);
            
     });
};



exports.delete = (req, res) => {

    user.delete(req, res).then((result) => {

        return responseHandler(res, result.status, result.message, result.data);

    }).catch((err) => {

            return responseHandler(res, err.status, err.message, err.data);
     });
};*/