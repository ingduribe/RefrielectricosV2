const { Sequelize, sequelize } = require("./../config/db");
const Model = Sequelize.Model;
class Products extends Model {}
Products.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "products"
    // options
  }
);

module.exports = Products;
