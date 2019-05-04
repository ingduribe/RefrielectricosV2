const { validationResult } = require("express-validator/check");

//Function to validate users
const createValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The name is required"),
    check("lastName")
      .not()
      .isEmpty()
      .withMessage("The lastname is required"),
    check("usernameLogin")
      .not()
      .isEmpty()
      .withMessage("The username login is required"),
    check("passwordLogin")
      .not()
      .isEmpty()
      .withMessage("The password login is required"),
    check("rolType")
      .not()
      .isEmpty()
      .withMessage("The type rol is required")
  ];
};

const loginValidaton = check => {
  return [
    check("usernameLogin")
      .not()
      .isEmpty()
      .withMessage("The username login is required"),
    check("passwordLogin")
      .not()
      .isEmpty()
      .withMessage("The password login is required")
  ];
};

//Obtain the errors of validations, is an array, if not exists errors will be empty
const validatorErrors = req => {
  return !validationResult(req).isEmpty() ? validationResult(req).array() : [];
};

//Export functions to validate an errors founds
module.exports = {
  createValidator,
  loginValidaton,
  validatorErrors
};
