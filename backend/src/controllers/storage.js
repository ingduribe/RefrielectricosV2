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
        newImage.extension = path.extname(file.name);
        let updates = false;

        let finded = await Storage.findOne({
          where: { fileName: newImage.fileName }
        });

        if (finded) {
          await Storage.update(
            {
              newImage
            },
            { where: { fileName: newImage.fileName } }
          );
          updates = true;
        } else {
          await Storage.create(newImage);
        }

        updates
          ? res.json(`${file.name} uploaded with updates`)
          : res.json(`${file.name} uploaded`);
      });
  } catch (err) {
    console.log(err);
  }
};

storageController.massiveUpload = async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    var newImage = {};
    let imagesList = [];

    form
      .parse(req)
      .on("fileBegin", (name, file) => {
        let filePath = path.join(__dirname, "../../uploads", file.name);
        file.path = filePath;
        newImage.fileName = file.name;
        newImage.resource = file.path;
        newImage.description = "Massive upload";
        newImage.inMassiveUpload = true;
        newImage.extension = path.extname(file.name);

        imagesList.push(newImage);

        newImage = {};
      })
      .on("end", async () => {
        let updates = false;
        for (const image of imagesList) {
          let finded = await Storage.findOne({
            where: { fileName: image.fileName }
          });

          if (finded) {
            await Storage.update(
              {
                image
              },
              { where: { fileName: image.fileName } }
            );
            updates = true;
          } else {
            await Storage.create(image);
          }
        }
        updates
          ? res.json("Massive upload completed with updates")
          : res.json("Massive upload completed");
      });
  } catch (error) {
    console.log(error);
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

    console.log(active, uuidCode);

    await Storage.update({ active }, { where: { uuidCode } });
    res.json(`Status changed`);
  } catch (err) {
    console.log(err);
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

storageController.getFileByProduct = async (req, res) => {
  try {
    let { idProduct } = req.params;
    let file = await Storage.findOne({
      attributes: ["resource"],
      where: { idProduct }
    });
    if (!file) return res.json(false);

    if (fs.existsSync(file.resource)) {
      file = fs.readFileSync(file.resource);
      res.contentType(`image/${file.extension}`);
      return res.end(file);
    } else {
      return res.status(404).json(`No resource found: ${file.fileName}`);
    }
  } catch (error) {
    console.log(error);
  }
};

storageController.getFileByUuidCode = async (req, res) => {
  try {
    let { uuidCode } = req.params;
    let file = await Storage.findOne({
      attributes: ["resource"],
      where: { uuidCode }
    });
    if (!file) return res.json(false);

    if (fs.existsSync(file.resource)) {
      file = fs.readFileSync(file.resource);
      res.contentType(`image/${file.extension}`);
      return res.end(file);
    } else {
      return res.status(404).json(`No resource found: ${file.fileName}`);
    }
  } catch (error) {
    console.log(error);
  }
};

storageController.getFileInformation = async (req, res) => {
  try {
    let { idProduct } = req.params;
    let fileInfo = await Storage.findOne({
      where: { idProduct }
    });
    res.json(fileInfo);
  } catch (error) {
    console.log(error);
  }
};

storageController.asignProductToImage = async (req, res) => {
  try {
    let { uuidCode } = req.params;
    let { idProduct } = req.body;

    await Storage.update({ idProduct }, { where: { uuidCode } });
    return res.json("Image asigned to product");
  } catch (error) {
    console.log(error);
  }
};

module.exports = storageController;
