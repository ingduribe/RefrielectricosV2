const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
class Categories extends Model {}
Categories.init(
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
    modelName: "categories"
    // options
  }
);

module.exports = Categories;
