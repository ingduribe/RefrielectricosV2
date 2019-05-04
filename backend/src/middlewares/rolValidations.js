const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const createOrUpdateValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The rol name is required")
      .isLength({ max: 30 })
      .withMessage("The title of the task can not be more than 30 characters")
  ];
};

const changeStatusValidator = check => {
  return [
    check("active")
      .not()
      .isEmpty()
      .withMessage("Rol status is required")
  ];
};

//Obtain the errors of validations, is an array, if not exists errors will be empty
const validatorErrors = req => {
  return !validationResult(req).isEmpty() ? validationResult(req).array() : [];
};

//Export functions to validate an errors founds
module.exports = {
  createOrUpdateValidator,
  changeStatusValidator,
  validatorErrors
};
