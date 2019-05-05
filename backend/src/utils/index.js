const bcrypt = require("bcrypt");
const { SALTROUNDS, SECRET } = process.env;
const jwt = require("jsonwebtoken");
var moment = require("moment");

const cryptPassword = async password =>
  await bcrypt.hash(password, parseInt(SALTROUNDS));

const comparePassword = async (password, passwordHash) =>
  await bcrypt.compare(password, passwordHash);

const generateJWT = (uuidNumber, usernameLogin, rolType) => {
  let payload = {
    id: uuidNumber,
    username: usernameLogin,
    rol: rolType,
    iat: moment().unix(),
    exp: moment()
      .add(1, "days")
      .unix()
  };

  return jwt.sign(payload, SECRET);
};

const decodeJWT = token => jwt.decode(token, SECRET);

module.exports = { cryptPassword, comparePassword, generateJWT, decodeJWT };
