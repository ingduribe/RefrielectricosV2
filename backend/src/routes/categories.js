//Importing the controller of tasks, validations and router
const router = require("express").Router();
const categoriesController = require("./../controllers/categories");
const { check } = require("express-validator/check");
const validator = require("../middlewares/categories-validations");

//Endpoint for create a category
router.post(
  "/",
  validator.validateCategories(check),
  categoriesController.addCategory
);

module.exports = router;
