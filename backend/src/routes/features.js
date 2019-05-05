const router = require("express").Router();
const featuresController = require("./../controllers/features");
const { check } = require("express-validator/check");
const validator = require("../middlewares/featuresValidations");
const { isAuth } = require("../middlewares/auth/checkAuth");

//Endpoint to create a category
router.post(
  "/",
  isAuth,
  validator.createValidator(check),
  featuresController.addFeature
);

//Endpoint to inactive a category
router.put(
  "/changeStatus/:id",
  isAuth,
  validator.changeStatusValidator(check),
  featuresController.changeStatus
);

//Endpoint to update a category
router.put(
  "/update/:id",
  isAuth,
  validator.updateValidator(check),
  featuresController.updateFeature
);

router.get("/", isAuth, featuresController.getActiveFeatures);

router.get("/inactive", isAuth, featuresController.getInactiveFeatures);

router.get("/all", isAuth, featuresController.getAllFeatures);

module.exports = router;
