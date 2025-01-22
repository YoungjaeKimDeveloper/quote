import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

export default cloudinary;
