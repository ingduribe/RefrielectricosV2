const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
class Features extends Model {}
Features.init(
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
    modelName: "features"
    // options
  }
);

module.exports = Features;
