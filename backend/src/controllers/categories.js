const categoriesController = {};
const validator = require("../middlewares/categoriesValidations");
const Categories = require("./../model/categories");

//Create cetegory
categoriesController.addCategory = async (req, res) => {
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
      return res.json(response);
    }
    const { name, description } = req.body;
    const newCategory = {
      name,
      description
    };
    const categoryCreated = await Categories.create(newCategory);
    res.json(categoryCreated);
  } catch (err) {
    console.log(err);
  }
};

//Change status category
categoriesController.changeStatus = async (req, res) => {
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
      return res.json(response);
    }
    const { status } = req.body;
    const { id } = req.params;

    await Categories.update({ active: !status }, { where: { id } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
  }
};

//Update category
categoriesController.updateCategory = async (req, res) => {
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
    const { name, description } = req.body;
    const { id } = req.params;

    await Categories.update({ name, description }, { where: { id } });
    res.json(`Category updated`);
  } catch (error) {
    console.log(error);
  }
};

categoriesController.getActiveCategories = async (req, res) => {
  try {
    const activeCategories = await Categories.findAll({ where: { active: 1 } });
    res.json(activeCategories);
  } catch (error) {
    console.log(error);
  }
};

categoriesController.getInactiveCategories = async (req, res) => {
  try {
    const inactiveCategories = await Categories.findAll({
      where: { active: 0 }
    });
    res.json(inactiveCategories);
  } catch (error) {
    console.log(error);
  }
};

categoriesController.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Categories.findAll();
    res.json(allCategories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = categoriesController;
