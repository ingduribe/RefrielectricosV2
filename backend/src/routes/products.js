const { check } = require("express-validator/check");
const validator = require("../middlewares/productsValidations");
const productsController = require("../controllers/products");
const { isAuth } = require("../middlewares/auth/checkAuth");
const router = require("express").Router();

router.post(
  "/",
  isAuth,
  validator.createValidator(check),
  productsController.addProducts
);

module.exports = router;
