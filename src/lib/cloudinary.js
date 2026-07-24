import {v2 as cloudinary} from "cloudinary";

import dotenv from "dotenv";

dotenv.config();

cloudinaary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  aaapi_secret: process.env.CLODINARY_AAPU_SECRET,
})

export default cloudinary;
