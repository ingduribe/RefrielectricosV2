const productsController = {};
const validator = require("../middlewares/productsValidations");
const Products = require("./../model/products");
const Categories = require("./../model/categories");
const Storage = require("./../model/storage");
const { Sequelize } = require("../config/db");
const Operator = Sequelize.Op;

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

productsController.getProductById = async (req, res) => {
  try {
    const id = req.params.idProduct;
    const product = await Products.findByPk(id);
    res.json(product);
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
    console.log("aca llego");
    const allProducts = await Products.findAll();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
  }
};

productsController.getProductsByCategory = async (req, res) => {
  try {
    const productsByCategory = await Products.findAll({
      where: { idCategory: req.params.idCategory, active: 1 }
    });
    res.json(productsByCategory);
  } catch (error) {
    console.log(error);
  }
};

productsController.getProductsLikeName = async (req, res) => {
  try {
    const productsLikeName = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name", "description"],
        where: { active: 1 }
      },
      where: {
        name: {
          [Operator["like"]]: `%${req.params.name}%`
        },
        active: 1
      }
    });

    res.json(productsLikeName);
  } catch (error) {
    console.log(error);
  }
};

productsController.getProductsByPriceHigher = async (req, res) => {
  try {
    const productsPriceHigher = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name", "description"],
        where: { active: 1 }
      },
      where: {
        price: {
          [Operator["gte"]]: req.params.price
        }
      }
    });

    res.json(productsPriceHigher);
  } catch (error) {
    console.log(error);
  }
};

productsController.getProductsByPriceLower = async (req, res) => {
  try {
    const productsPriceLower = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name", "description"],
        where: { active: 1 }
      },
      where: {
        price: {
          [Operator["lte"]]: req.params.price
        }
      }
    });

    res.json(productsPriceLower);
  } catch (error) {
    console.log(error);
  }
};

productsController.getProductsBetweenPrices = async (req, res) => {
  try {
    const productsBeteenPrices = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name", "description"],
        where: { active: 1 }
      },
      where: {
        price: {
          [Operator["between"]]: [req.params.lowerPrice, req.params.higherPrice]
        }
      }
    });

    res.json(productsBeteenPrices);
  } catch (error) {
    console.log(error);
  }
};

module.exports = productsController;
