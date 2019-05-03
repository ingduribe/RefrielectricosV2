//Importing the controller of tasks, validations and router
const router = require("express").Router();
const categoriesController = require("./../controllers/categories");
const { check } = require("express-validator/check");
const validator = require("../middlewares/categories-validations");

module.exports = app => {
  //Endpoint to create a category
  app.post(
    "/categories/",
    validator.createValidator(check),
    categoriesController.addCategory
  );

  //Endpoint to inactive a category
  app.put(
    "/categories/changeStatus/:id",
    validator.changeStatusValidator(check),
    categoriesController.changeStatus
  );

  //Endpoint to update a category
  app.put(
    "/categories/update/:id",
    validator.updateValidator(check),
    categoriesController.updateCategory
  );

  //Endpoint to get active categories
  app.get("/categories/", categoriesController.getActiveCategories);

  //Endpoint to get inactive categories
  app.get("/categories/inactive", categoriesController.getInactiveCategories);

  //Endpoint to get all categories
  app.get("/categories/all", categoriesController.getAllCategories);
};
