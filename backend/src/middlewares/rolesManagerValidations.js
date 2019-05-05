const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const manageRolValidator = check => {
  return [
    check("featureId")
      .not()
      .isEmpty()
      .withMessage("The feature is required"),
    check("roleId")
      .not()
      .isEmpty()
      .withMessage("The rol is required")
  ];
};

//Obtain the errors of validations, is an array, if not exists errors will be empty
const validatorErrors = req => {
  return !validationResult(req).isEmpty() ? validationResult(req).array() : [];
};

//Export functions to validate an errors founds
module.exports = {
  manageRolValidator,
  validatorErrors
};
