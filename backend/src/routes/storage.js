const router = require("express").Router();
const storageController = require("./../controllers/storage");
const { check } = require("express-validator/check");
const validator = require("../middlewares/storageValidations");
const { isAuth } = require("../middlewares/auth/checkAuth");

//Endpoint to create a category
router.post("/upload", isAuth, storageController.upload);

//Endpoint to inactive a category
router.put(
  "/changeStatus/:uuidCode",
  isAuth,
  validator.changeStatusValidator(check),
  storageController.changeStatus
);

router.get("/file/:idProduct", storageController.getFileByProduct);

router.get("/file/uuid/:uuidCode", storageController.getFileByUuidCode);

router.post("/massiveUpload", isAuth, storageController.massiveUpload);

router.put(
  "/asignProductToImage/:uuidCode",
  storageController.asignProductToImage
);

router.get("/", storageController.getActiveImages);

router.get("/inactive", isAuth, storageController.getInactiveImages);

router.get("/all", isAuth, storageController.getAllImages);

//Endpoint to get source by id
router.get("/:idProduct", isAuth, storageController.getFileInformation);

module.exports = router;
