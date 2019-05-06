const { check } = require("express-validator/check");
const validator = require("../middlewares/rolesManagerValidations");
const rolManagerController = require("../controllers/rolesManager");
const router = require("express").Router();
const { isAuth } = require("../middlewares/auth/checkAuth");

router.get("/:roleId", isAuth, rolManagerController.getFeaturesByRol);

router.post(
  "/asignFeatureToRol",
  isAuth,
  validator.manageRolValidator(check),
  rolManagerController.asignFeatureToRol
);

router.delete(
  "/removeFeatureFromRol/:featureId/:roleId",
  isAuth,
  rolManagerController.removeFeatureFromRol
);

module.exports = router;
