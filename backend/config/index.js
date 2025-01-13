import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI,
  ATLAS_URI: process.env.ATLAS_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
  COOKIE_EXPIRES: process.env.COOKIE_EXPIRES,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export default config;
