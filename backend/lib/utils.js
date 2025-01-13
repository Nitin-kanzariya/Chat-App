import jwt from "jsonwebtoken";
import config from "../config/index.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES,
  });

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + config.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
  });
  return token;
};
