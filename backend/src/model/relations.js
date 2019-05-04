const Products = require("./products");
const Categories = require("./categories");
const Users = require("./users");
const Roles = require("./roles");
const Features = require("./features");

(async () => {
  await Features.belongsTo(Roles, { foreignKey: "idRol" });
  await Products.belongsTo(Categories, { foreignKey: "idCategory" });

  await Roles.sync();
  await Features.sync();
  await Categories.sync();
  await Products.sync();
  await Users.sync();
})();
