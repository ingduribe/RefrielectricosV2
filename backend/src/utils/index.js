const bcrypt = require("bcrypt");
const { SALTROUNDS, SECRET } = process.env;
const jwt = require("jsonwebtoken");

const cryptPassword = async password =>
  await bcrypt.hash(password, parseInt(SALTROUNDS));

const comparePassword = async (password, passwordHash) =>
  await bcrypt.compare(password, passwordHash);

const generateJWT = (userId, usernameLogin, rolType) => {
  try {
  } catch (error) {
    console.log;
  }
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: userId,
    username: usernameLogin,
    rol: rolType
  };

  return jwt.sign(payload, SECRET, { expiresIn: "2h" });
};

const validateJWT = token => jwt.verify(token, SECRET);

module.exports = { cryptPassword, comparePassword, generateJWT, validateJWT };
