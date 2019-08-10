const Products = require("./products");
const Categories = require("./categories");
const Users = require("./users");
const Roles = require("./roles");
const Features = require("./features");
const rolesManager = require("./rolesManager");
const Storage = require("./storage");

(async () => {
  await Products.belongsTo(Categories, { foreignKey: "idCategory" });
  await Storage.belongsTo(Products, { foreignKey: "idProduct" });

  await Features.belongsToMany(Roles, { through: "rolesManager" });
  await Roles.belongsToMany(Features, { through: "rolesManager" });

  await Roles.sync();
  await Features.sync();
  await Categories.sync();
  await Products.sync();
  await Storage.sync();
  await Users.sync();
  await rolesManager.sync();

  console.log("Database Sync done!");
})();
