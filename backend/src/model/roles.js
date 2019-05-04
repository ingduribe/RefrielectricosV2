const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
class Roles extends Model {}
Roles.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "roles"
    // options
  }
);

module.exports = Roles;
