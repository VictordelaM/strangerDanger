import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import {userRouter} from './controller/user.js'
import { imageRouter } from "./controller/image.js";
import { v2 as cloudinary } from "cloudinary";

const PORT = 3000;
const app = express();

await mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: "du97czlhz",
  api_key: "452675419245823",
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(cors());
app.use("/user", userRouter);
app.use("/image", imageRouter);

app.listen(PORT);
console.log(`listen http://localhost:${PORT}`);
