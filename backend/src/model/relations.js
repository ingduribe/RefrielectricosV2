const Products = require("./products");
const Categories = require("./categories");
const Users = require("./users");

(async () => {
  await Products.belongsTo(Categories, { foreignKey: "idCategory" });

  await Categories.sync();
  await Products.sync();
  await Users.sync();
})();
