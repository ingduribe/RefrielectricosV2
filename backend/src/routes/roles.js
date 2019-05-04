const { check } = require("express-validator/check");
const validator = require("../middlewares/rolValidations");
const rolController = require("../controllers/roles");
const router = require("express").Router();
const { isAuth } = require("../middlewares/auth/checkAuth");

router.post(
  "/",
  isAuth,
  validator.createOrUpdateValidator(check),
  rolController.addRol
);

router.put(
  "/update/:id",
  isAuth,
  validator.createOrUpdateValidator(check),
  rolController.updateRol
);

router.put("/changeStatus/:id", isAuth, rolController.changeStatus);

router.get("/", isAuth, rolController.getActiveRoles);

router.get("/inactive", isAuth, rolController.getInactiveRoles);

router.get("/all", isAuth, rolController.getAllRoles);

module.exports = router;
