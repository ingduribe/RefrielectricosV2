//Importing the controller of tasks, validations and router
const router = require("express").Router();
const categoriesController = require("./../controllers/categories");
const { check } = require("express-validator/check");
const validator = require("../middlewares/categories-validations");

//Endpoint to create a category
router.post(
  "/",
  validator.createValidator(check),
  categoriesController.addCategory
);

//Endpoint to inactive a category
router.put(
  "/changeStatus/:id",
  validator.changeStatusValidator(check),
  categoriesController.changeStatus
);

//Endpoint to update a category
module.exports = router;
router.put(
  "/update/:id",
  validator.updateValidator(check),
  categoriesController.updateCategory
);
