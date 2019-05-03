const bcrypt = require("bcrypt");
const { SALTROUNDS, SECRET } = process.env;
const jwt = require("jsonwebtoken");

const cryptPassword = async password => {
  try {
    const hash = await bcrypt.hash(password, parseInt(SALTROUNDS));
    return hash;
  } catch (error) {
    console.log(error);
  }
};

const generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    SECRET
  );
};

const validateJWT = token => jwt.verify(token, SECRET);

module.exports = { cryptPassword, generateJWT, validateJWT };
