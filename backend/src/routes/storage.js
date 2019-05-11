const router = require("express").Router();
const storageController = require("./../controllers/storage");
const { check } = require("express-validator/check");
const validator = require("../middlewares/storageValidations");
const { isAuth } = require("../middlewares/auth/checkAuth");

//Endpoint to create a category
router.post(
  "/upload",
  isAuth,
  // validator.createValidator(check),
  storageController.upload
);

//Endpoint to inactive a category
router.put(
  "/changeStatus/:uuidCode",
  isAuth,
  validator.changeStatusValidator(check),
  storageController.changeStatus
);

//Endpoint to update a category
router.put(
  "/update/:id",
  isAuth,
  validator.updateValidator(check),
  storageController.updateImage
);

//Endpoint to get active categories
router.get("/", storageController.getActiveImages);

//Endpoint to get inactive categories
router.get("/inactive", isAuth, storageController.getInactiveImages);

//Endpoint to get all categories
router.get("/all", isAuth, storageController.getAllImages);

module.exports = router;
