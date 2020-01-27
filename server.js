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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const userController = require("./controllers/UserControl");

// End point Routes
app.post("/api/user/create", userController.create);
app.post("/api/user/update", userController.update);

//Start Server
app.listen(PORT, () => console.log("Server started on port", PORT));
