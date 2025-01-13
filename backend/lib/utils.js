import jwt from "jsonwebtoken";
import config from "../config/index.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES,
  });

  return token;
};
