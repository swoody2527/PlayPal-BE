const functions = require("firebase-functions");
const express = require("express");
const app = express();


// Require controllers

const {
  getReviews,
} = require("./controllers/controllers.js");


// Endpoints
app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World");
});

app.get("/reviews", getReviews);


// Export Express App
exports.app = functions.https.onRequest(app);

