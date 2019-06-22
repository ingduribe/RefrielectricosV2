const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const createValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The category name is required"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The category description is required")
  ];
};

const changeStatusValidator = check => {
  return [
    check("status")
      .not()
      .isEmpty()
      .withMessage("Category status is required")
  ];
};

const updateValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The category name is required")
      .isLength({ max: 30 })
      .withMessage("The title of the task can not be more than 30 characters"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The category description is required")
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
