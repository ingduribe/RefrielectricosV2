const router = require("express").Router();
const categoriesController = require("./../controllers/categories");
const { check } = require("express-validator/check");
const validator = require("../middlewares/categoriesValidations");
const { isAuth } = require("../middlewares/auth/checkAuth");
const { isAuthJWT } = require("../middlewares/auth/checkJWTAuth");

//Endpoint to create a category
router.post(
  "/",
  isAuth,
  validator.createValidator(check),
  categoriesController.addCategory
);

//Endpoint to inactive a category
router.put(
  "/changeStatus/:id",
  isAuth,
  validator.changeStatusValidator(check),
  categoriesController.changeStatus
);

//Endpoint to update a category
router.put(
  "/update/:id",
  isAuth,
  validator.updateValidator(check),
  categoriesController.updateCategory
);

//Endpoint to get active categories
router.get("/", categoriesController.getActiveCategories);

//Endpoint to get inactive categories
router.get("/inactive", isAuth, categoriesController.getInactiveCategories);

//Endpoint to get all categories
router.get("/all", isAuth, categoriesController.getAllCategories);

module.exports = router;
