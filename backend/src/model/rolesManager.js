const { Sequelize, sequelize } = require("../config/db");
const Model = Sequelize.Model;
class rolesManager extends Model {}
rolesManager.init(
  {
    //Puloate with id roles and id features
  },
  {
    sequelize,
    modelName: "rolesManager"
    // options
  }
);

module.exports = rolesManager;
