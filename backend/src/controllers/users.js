const usersController = {};
const validator = require("../middlewares/user-validations");
const Users = require("./../model/users");
const bcrypt = require("bcrypt");
const { SALTROUNDS } = process.env;

const cryptPassword = async password => {
  try {
    const hash = await bcrypt.hash(password, parseInt(SALTROUNDS));
    return hash;
  } catch (error) {
    console.log(error);
  }
};

usersController.addUser = async (req, res) => {
  try {
    const errors = validator.validatorErrors(req);
    if (errors.length) {
      let listErrors = "";
      for (const err of errors) {
        listErrors += err.msg + ".";
      }
      let response = {
        message: listErrors,
        type: "danger"
      };
      res.json(response);
    }
    let { name, lastName, usernameLogin, passwordLogin, rolType } = req.body;
    passwordLogin = await cryptPassword(passwordLogin);
    const newUser = { name, lastName, usernameLogin, passwordLogin, rolType };
    await Users.create(newUser);
    res.json("User created");
  } catch (error) {
    console.log(error);
  }
};

module.exports = usersController;
