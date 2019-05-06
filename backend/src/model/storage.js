const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
class Storage extends Model {}
Storage.init(
  {
    // attributes
    uuidCode: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING
    },
    fileName: {
      type: Sequelize.INTEGER
    },
    base64: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "storage"
    // options
  }
);

module.exports = Storage;
