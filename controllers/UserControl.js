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
  },
  update: (req, res) => {
    UserModel.update({ _id: req.body.id }, req.body)
      .then(user => {
        if (!user) res.json({ success: false, result: "user not found" });

        res.json(user);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
};
