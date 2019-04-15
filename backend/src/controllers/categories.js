const categoriesController = {};
const validator = require("../middlewares/categories-validations");
const Categories = require("./../model/categories");

//Controller to create a cetegory
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
  } catch (error) {}
};

module.exports = categoriesController;
