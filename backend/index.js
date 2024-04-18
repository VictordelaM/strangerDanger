import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import {userRouter} from './controller/user.js'
import { imageRouter } from "./controller/image.js";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();

await mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: "du97czlhz",
  api_key: "452675419245823",
  api_secret: process.env.CLOUDINARY_SECRET,
});
app.use(cookieParser())
app.use(cors({origin:process.env.CORS_ACCESS,credentials:true}));
app.use("/user", userRouter);
app.use("/image", imageRouter);

app.listen(PORT);
console.log(`listen http://localhost:${PORT}`);
