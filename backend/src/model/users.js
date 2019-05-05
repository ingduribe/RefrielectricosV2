const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
const { TYPE1, TYPE2 } = process.env;
class Users extends Model {}
Users.init(
  {
    // attributes
    uuidNumber: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    usernameLogin: {
      type: Sequelize.STRING
    },
    passwordLogin: {
      type: Sequelize.STRING
    },
    lastLogin: {
      type: Sequelize.DATE
    },
    rolType: {
      type: Sequelize.ENUM(TYPE1, TYPE2)
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "users"
  }
);

module.exports = Users;
