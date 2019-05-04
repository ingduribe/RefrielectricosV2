const { decodeJWT } = require("../../utils");
const moment = require("moment");

exports.isAuth = (req, res, next) => {
  if (!req.headers["authorization"])
    return res.status(403).json("Need authorization for this request");

  const paylodToken = decodeJWT(req.headers["authorization"].split(" ")[1]);
  if (paylodToken.exp <= moment().unix())
    return res.status(403).json("Expired token");

  next();
};
