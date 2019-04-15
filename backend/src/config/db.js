const Sequelize = require("sequelize");
const { DBNAME, USERNAMEDB, PASSWORD, DBTYPE, HOST } = process.env;

const sequelize = new Sequelize(DBNAME, USERNAMEDB, PASSWORD, {
  host: HOST,
  dialect: DBTYPE
});

module.exports = { sequelize, Sequelize };
