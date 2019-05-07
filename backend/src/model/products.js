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
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    showPrice: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "products"
    // options
  }
);

module.exports = Products;
