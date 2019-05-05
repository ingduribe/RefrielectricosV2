const rolesManagerController = {};
const validator = require("../middlewares/rolesManagerValidations");
const RolesManager = require("./../model/rolesManager");

rolesManagerController.asignFeatureToRol = async (req, res) => {
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
    const { featureId, roleId } = req.body;
    const featureToRol = {
      featureId,
      roleId
    };
    await RolesManager.create(featureToRol);
    res.json("Feature was asigned to rol");
  } catch (err) {
    console.log(err);
  }
};

rolesManagerController.removeFeatureFromRol = async (req, res) => {
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

    const { featureId, roleId } = req.params;

    await RolesManager.destroy({ where: { featureId, roleId } });
    res.json("Feature was deleted from role");
  } catch (error) {
    console.log(error);
  }
};

module.exports = rolesManagerController;
