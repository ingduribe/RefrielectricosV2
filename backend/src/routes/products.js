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

router.put(
  "/changeStatus/:id",
  isAuth,
  validator.changeStatusValidator(check),
  productsController.changeStatus
);

router.get("/", productsController.getActiveProduct);

router.get("/one/:idProduct", productsController.getProductById);

router.get("/inactive", isAuth, productsController.getInactiveProduct);

router.get("/all", isAuth, productsController.getAllProduct);

router.get("/category/:idCategory", productsController.getProductsByCategory);

router.get("/getLikeName/:name", productsController.getProductsLikeName);

router.get(
  "/getHigherPrice/:price",
  productsController.getProductsByPriceHigher
);

router.get("/getLowerPrice/:price", productsController.getProductsByPriceLower);

router.get(
  "/getBetweenPrices/:lowerPrice/:higherPrice",
  productsController.getProductsBetweenPrices
);

module.exports = router;
