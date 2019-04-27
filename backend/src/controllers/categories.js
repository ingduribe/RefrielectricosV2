const categoriesController = {};
const validator = require("../middlewares/categories-validations");
const Categories = require("./../model/categories");
const { sequelize } = require("./../config/db");

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
      res.json(response);
    }
    const { name, description } = req.body;
    const newCategory = {
      name,
      description
    };
    await Categories.create(newCategory);

    res.json("Created");
  } catch (err) {
    console.log(err);
  } finally {
    await sequelize.close();
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
      res.json(response);
    }
    const { active } = req.body;
    const { id } = req.params;

    await Categories.update({ active }, { where: { id } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
  } finally {
    await sequelize.close();
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

    console.log(name, description, id);

    await Categories.update({ name, description }, { where: { id } });
    res.json(`Category updated`);
  } catch (error) {
    console.log(err);
  } finally {
    await sequelize.close();
  }
};

module.exports = categoriesController;
