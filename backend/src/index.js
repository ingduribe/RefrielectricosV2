//Environment
require("dotenv").config();
const requiredEnv = [
  "PORT",
  "DBNAME",
  "USERNAME",
  "PASSWORD",
  "DBTYPE",
  "HOST",
  "SECRET",
  "SALTROUNDS",
  "TYPE1",
  "TYPE2"
];
for (let envVar of requiredEnv) {
  if (!process.env[envVar])
    throw new Error(`${envVar} env variable must be declared in .env file`);
}

(async () => {
  const { sequelize } = require("./config/db");
  await require("./model/relations");
  try {
    await sequelize.authenticate();

    console.log("Conected to database");
    require("./server");
  } catch (error) {
    console.error(error);
  }
})();
