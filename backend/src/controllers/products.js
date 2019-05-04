const productsController = {};
const validator = require("../middlewares/productsValidations");
const Products = require("./../model/products");

productsController.addProducts = (req, res) => {
  try {
    const errors = validator.validatorErrors(req);
    if (errors.length) {
      let listErrors = "";
      for (const err of errors) {
        listErrors += err.msg + ".";
      }
      let response = {
        message: listErrors,
        type: "danger"
      };
      res.json(response);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = productsController;
