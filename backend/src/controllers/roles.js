const rolController = {};
const validator = require("../middlewares/rolValidations");
const Roles = require("../model/roles");

rolController.addRol = async (req, res) => {
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
    const newRol = { name, description };
    await Roles.create(newRol);

    res.json("New rol created");
  } catch (error) {
    console.log(error);
  }
};

rolController.changeStatus = async (req, res) => {
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

    await Roles.update({ active }, { where: { id } });
    res.json(`Status changed`);
  } catch (error) {
    console.log(error);
  }
};

rolController.updateRol = async (req, res) => {
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

    await Roles.update({ name, description }, { where: { id } });
    res.json(`Rol updated`);
  } catch (error) {
    console.log(error);
  }
};

rolController.getActiveRoles = async (req, res) => {
  try {
    const activeRoles = await Roles.findAll({ where: { active: 1 } });
    res.json(activeRoles);
  } catch (error) {
    console.log(error);
  }
};

rolController.getInactiveRoles = async (req, res) => {
  try {
    const inactiveRoles = await Roles.findAll({
      where: { active: 0 }
    });
    res.json(inactiveRoles);
  } catch (error) {
    console.log(error);
  }
};

rolController.getAllRoles = async (req, res) => {
  try {
    const allRoles = await Roles.findAll();
    res.json(allRoles);
  } catch (error) {
    console.log(error);
  }
};

module.exports = rolController;
