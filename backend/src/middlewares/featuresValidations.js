const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const createValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The feature name is required"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The feature description is required")
  ];
};

const changeStatusValidator = check => {
  return [
    check("active")
      .not()
      .isEmpty()
      .withMessage("feature status is required")
  ];
};

const updateValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The feature name is required"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The feature description is required")
  ];
};

//Obtain the errors of validations, is an array, if not exists errors will be empty
const validatorErrors = req => {
  return !validationResult(req).isEmpty() ? validationResult(req).array() : [];
};

//Export functions to validate an errors founds
module.exports = {
  createValidator,
  changeStatusValidator,
  updateValidator,
  validatorErrors
};
