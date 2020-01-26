const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

// DataBase
mongoose
  .connect("mongodb://admin:dragon1@ds213529.mlab.com:13529/user-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database...");
  })
  .catch(err => console.error(err));

// MiddleWare

// Controllers

// Routes

//Start Server
