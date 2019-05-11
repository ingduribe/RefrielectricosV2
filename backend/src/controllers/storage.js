const storageController = {};
const validator = require("../middlewares/storageValidations");
const Storage = require("./../model/storage");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

storageController.upload = (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    var newImage = {};

    form
      .parse(req)
      .on("field", (name, field) => {
        newImage[name] = field;
      })
      .on("fileBegin", (name, file) => {
        let filePath = path.join(__dirname, "../../uploads", file.name);
        file.path = filePath;

        newImage = { ...newImage, file };
      })
      .on("end", async () => {
        const { file } = newImage;
        newImage.resource = file.path;
        newImage.fileName = file.name;
        if (fs.existsSync(file.path)) {
          await Storage.create(newImage);
          res.json(`${file.name} uploaded`);
        }
      });
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

storageController.updateImage = async (req, res) => {
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
    const { description, fileName, resource } = req.body;
    const { uuidCode } = req.params;

    await Storage.update(
      { description, fileName, resource },
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
