const owners = require("../owners/owner-model");

module.exports = {
  async requiredName(req, res, next) {
    let name = req.body.name;

    if (!name) {
      res.status(400).json({ message: "Please provided a name!" });
      return;
    }

    next();
  },
};
