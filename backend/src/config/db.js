const Sequelize = require("sequelize");
const { DBNAME, USERNAMEDB, PASSWORD, DBTYPE, HOST } = process.env;

const sequelize = new Sequelize(DBNAME, USERNAMEDB, PASSWORD, {
  host: HOST,
  dialect: DBTYPE,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = { sequelize, Sequelize };
