const { decodeJWT } = require("../../utils");
const { KEY, SECRET } = process.env;

exports.isAuthJWT = (req, res, next) => {
  console.log(req.originalUrl);
  if (!req.headers["authorization"])
    return res
      .status(403)
      .json("Access Denied: You need authorization for this request");

  const paylodToken = decodeJWT(req.headers["authorization"].split(" ")[1]);
  const { key, secret } = paylodToken;

  if (key !== KEY || secret !== SECRET) {
    return res
      .status(403)
      .json("Access Denied: You dont have correct token to access ower data");
  }

  next();
};
