const UserModel = require("../models/UserModels");

module.exports = {
  create: (req, res) => {
    let user = new UserModel({
      forename: req.body.forename,
      sirname: req.body.sirname,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      team: req.body.team
    });
    user
      .save()
      .then(result => {
        res.json({ success: true, result });
      })
      .catch(err => {
        res.json({ success: false, err });
      });
  }
};
