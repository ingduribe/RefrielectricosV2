const usersController = {};
const validator = require("../middlewares/userValidations");
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
    passport.authenticate("local-signup", async (err, user, msg) => {
      if (err) throw new Error("Error with create user", err);
      await res.json({ user, msg });
    })(req, res);
  } catch (error) {
    console.log(error);
  }
};

usersController.loginUser = (req, res) => {
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

    passport.authenticate("local-signin", async (err, user, msg) => {
      if (err) throw new Error("Error with create user", err);
      await res.json({ user, msg });
    })(req, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = usersController;
