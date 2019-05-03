//Importing the controller of tasks, validations and router
const { check } = require("express-validator/check");
const validator = require("../middlewares/user-validations");
const userController = require("../controllers/users");
const router = require("express").Router();

//Endpoint to create a category
router.post("/", validator.createValidator(check), userController.createUser);

module.exports = router;
