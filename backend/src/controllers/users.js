const usersController = {};
const validator = require("../middlewares/user-validations");
const passport = require("passport");

usersController.createUser = (req, res) => {
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
    passport.authenticate("local", async (err, user, msg) => {
      if (err) throw new Error("Error with create user", err);
      await res.json({ user, msg });
    })(req, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = usersController;
