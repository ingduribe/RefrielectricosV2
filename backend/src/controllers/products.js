const productsController = {};
const validator = require("../middlewares/productsValidations");
const Products = require("./../model/products");

productsController.addProducts = async (req, res) => {
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

    const { name, brand, model, description, price, idCategory } = req.body;
    const newProduct = {
      name,
      brand,
      model,
      description,
      price,
      idCategory
    };
    await Products.create(newProduct);
    res.json("Created");
  } catch (error) {
    console.log(error);
  }
};

productsController.changeStatus = async (req, res) => {
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
    const { active } = req.body;
    const { id } = req.params;

    await Products.update({ active }, { where: { id } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
  }
};

productsController.updateProduct = async (req, res) => {
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
    const { name, description, idCategory } = req.body;
    const { id } = req.params;

    await Products.update({ name, description, idCategory }, { where: { id } });
    res.json(`Product updated`);
  } catch (error) {
    console.log(error);
  }
};

productsController.getActiveProduct = async (req, res) => {
  try {
    const activeProducts = await Products.findAll({ where: { active: 1 } });
    res.json(activeProducts);
  } catch (error) {
    console.log(error);
  }
};

productsController.getInactiveProduct = async (req, res) => {
  try {
    const inactiveProducts = await Products.findAll({
      where: { active: 0 }
    });
    res.json(inactiveProducts);
  } catch (error) {
    console.log(error);
  }
};

productsController.getAllProduct = async (req, res) => {
  try {
    const allProducts = await Products.findAll();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = productsController;
