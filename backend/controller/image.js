import express from "express";
import multer from "multer";
import { Image } from "../models/images.js";
import { uploadImage } from "../utils/uploadImage.js";
export const imageRouter = express.Router();
const mult = multer({ storage: multer.memoryStorage() });

imageRouter.post("/create", mult.single("image"), async (req, res) => {
  console.log(req.file);
  const { text, likes } = req.body;
  if (!text || !req.file) {
    res.sendStatus(403);
    return;
  }
  console.log(req.body);
  const uploadResult = await uploadImage(req.file.buffer);
  console.log(uploadResult);
  const imageUrl = uploadResult.secure_url;
  console.log(req.file);
  const image = await Image.create({ imageUrl, text, likes });
  res.json(image);
});

imageRouter.get("/", async (req, res) => {
  const image = await Image.find().lean();
  res.json(image);
});

imageRouter.patch("/:id", mult.single("image"), async (req, res) => {
  const { text, likes } = req.body;
  const id = req.params.id;
  const image = await Image.findOneAndUpdate(
    { _id: id },
    { text, likes },
    { new: true }
  );
  res.json(image);
});
