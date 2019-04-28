//Importing the controller of tasks, validations and router
const router = require("express").Router();
const usersController = require("./../controllers/users");
const { check } = require("express-validator/check");
const validator = require("../middlewares/user-validations");

//Endpoint to create a category
router.post("/", validator.createValidator(check), usersController.addUser);

module.exports = router;
