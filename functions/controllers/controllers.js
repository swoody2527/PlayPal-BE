// Import models

const {
  fetchReviews,
} = require("../models/models.js");


// Controller

const getReviews = (req, res, next) => {
  fetchReviews()
      .then((reviews) => res.status(200).send({reviews}))
      .catch((err) => {
        console.log(err);
      });
};


module.exports = {
  getReviews,
};
