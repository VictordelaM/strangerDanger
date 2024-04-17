import express from "express";
import multer from "multer";
import { Image } from "../models/images.js";
import { uploadImage } from "../utils/uploadImage.js";
export const imageRouter = express.Router();
const mult = multer({ storage: multer.memoryStorage() });

imageRouter.post("/create", mult.single("image"), async (req, res) => {
  const { text, likes } = req.body;
  if (!text || !req.file) {
    res.sendStatus(403);
    return;
  }
  const uploadResult = await uploadImage(req.file.buffer);
  const imageUrl = uploadResult.secure_url;
  const image = await Image.create({ imageUrl, text, likes });
  res.json(image);
});

imageRouter.get("/", async (req, res) => {
  const image = await Image.find().lean();
  res.json(image);
});

imageRouter.patch("/:id", mult.single("image"), async (req, res) => {
  const { likes } = req.body;
  const id = req.params.id;
  const image = await Image.findOneAndUpdate(
    { _id: id },
    { likes },
    { new: true }
  );
  res.json(image);
});
