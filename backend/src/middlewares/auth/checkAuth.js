const { decodeJWT } = require("../../utils");
const moment = require("moment");
const Users = require("../../model/users");
const { TYPE1 } = process.env;

exports.isAuth = async (req, res, next) => {
  console.log(req.originalUrl);
  if (!req.headers["authorization"])
    return res
      .status(403)
      .json("Access Denied: You need authorization for this request");

  const paylodToken = decodeJWT(req.headers["authorization"].split(" ")[1]);
  const { id, username, rol, exp } = paylodToken;

  const user = await Users.findAll({
    where: { uuidNumber: id, usernameLogin: username }
  });

  if (exp <= moment().unix()) return res.status(403).json("Expired token");
  if (rol !== TYPE1 || !user) {
    return res
      .status(403)
      .json(
        "Access Denied: You dont have correct privilege to perform this operation"
      );
  }

  next();
};
