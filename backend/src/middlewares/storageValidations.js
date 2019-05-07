const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const createValidator = check => {
  return [
    check("description")
      .not()
      .isEmpty()
      .withMessage("The image description is required"),
    check("fileName")
      .not()
      .isEmpty()
      .withMessage("The image filename is required"),
    check("resource")
      .not()
      .isEmpty()
      .withMessage("The image is required")
  ];
};

const changeStatusValidator = check => {
  return [
    check("active")
      .not()
      .isEmpty()
      .withMessage("Category status is required")
  ];
};

const updateValidator = check => {
  return [
    check("description")
      .not()
      .isEmpty()
      .withMessage("The image description is required"),
    check("fileName")
      .not()
      .isEmpty()
      .withMessage("The image filename is required"),
    check("base64")
      .not()
      .isEmpty()
      .withMessage("The image is required")
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
