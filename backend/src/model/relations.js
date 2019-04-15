const Products = require("./products");
const Categories = require("./categories");

(async () => {
  await Products.belongsTo(Categories, { foreignKey: "idCategory" });

  await Categories.sync();
  await Products.sync();
})();
