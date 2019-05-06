const storageController = {};
const validator = require("../middlewares/storageValidations");
const Storage = require("./../model/storage");

storageController.addImage = async (req, res) => {
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
    const { description, fileName, base64 } = req.body;
    const newImage = {
      description,
      fileName,
      base64
    };
    await Storage.create(newImage);
    res.json("Image uploaded");
  } catch (err) {
    console.log(err);
  }
};

storageController.changeStatus = async (req, res) => {
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
    const { uuidCode } = req.params;

    await Storage.update({ active }, { where: { uuidCode } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
  }
};

storageController.updateSImage = async (req, res) => {
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
    const { description, fileName, base64 } = req.body;
    const { uuidCode } = req.params;

    await Storage.update(
      { description, fileName, base64 },
      { where: { uuidCode } }
    );
    res.json(`Image updated`);
  } catch (error) {
    console.log(error);
  }
};

storageController.getActiveImages = async (req, res) => {
  try {
    const activeImages = await Storage.findAll({ where: { active: 1 } });
    res.json(activeImages);
  } catch (error) {
    console.log(error);
  }
};

storageController.getInactiveImages = async (req, res) => {
  try {
    const inactiveImages = await Storage.findAll({
      where: { active: 0 }
    });
    res.json(inactiveImages);
  } catch (error) {
    console.log(error);
  }
};

storageController.getAllImages = async (req, res) => {
  try {
    const allImages = await Storage.findAll();
    res.json(allImages);
  } catch (error) {
    console.log(error);
  }
};

module.exports = storageController;
