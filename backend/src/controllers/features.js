const featureController = {};
const validator = require("../middlewares/featuresValidations");
const Features = require("./../model/features");

featureController.addFeature = async (req, res) => {
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
    const newFeature = {
      name,
      description
    };
    await Features.create(newFeature);
    res.json("Created");
  } catch (err) {
    console.log(err);
  }
};

//Change status category
featureController.changeStatus = async (req, res) => {
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

    await Features.update({ active }, { where: { id } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
  }
};

//Update category
featureController.updateFeature = async (req, res) => {
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

    await Features.update({ name, description }, { where: { id } });
    res.json(`Feature updated`);
  } catch (error) {
    console.log(error);
  }
};

featureController.getActiveFeatures = async (req, res) => {
  try {
    const activeFeatures = await Features.findAll({ where: { active: 1 } });
    res.json(activeFeatures);
  } catch (error) {
    console.log(error);
  }
};

featureController.getInactiveFeatures = async (req, res) => {
  try {
    const inactiveFeatures = await Features.findAll({
      where: { active: 0 }
    });
    res.json(inactiveFeatures);
  } catch (error) {
    console.log(error);
  }
};

featureController.getAllFeatures = async (req, res) => {
  try {
    const allFeatures = await Features.findAll();
    res.json(allFeatures);
  } catch (error) {
    console.log(error);
  }
};

module.exports = featureController;
