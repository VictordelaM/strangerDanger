import express from "express";
import multer from "multer";
import { Image } from "../models/images.js";
import { uploadImage } from "../utils/uploadImage.js";
import { checkAuth } from "../middleware/checkAuth.js";
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

// imageRouter.patch("/likes/:id", async (req, res) => {
//   console.log(req.body);
//   const { likes } = req.body;
//   const id = req.params.id;
//   const image = await Image.findOneAndUpdate(
//     { _id: id },
//     { likes },
//     { new: true }
//   );
//   res.json(image);
// });

imageRouter.post("/:imageId/setFavorite", checkAuth, async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  // console.log("Ähey", req.user);
  const { imageId } = req.params;
  const user = req.user;
  const { newLikedStatus } = req.body;
  const image = await Image.findOne({ _id: imageId });

  // todo: validieren ob noetige daten da sind

  image.likes.push(user.id);
  image.save();
  res.sendStatus(200);
  console.log("joooo", image);
  // if (newLikedStatus === true) {
  // }
  //  else if (image.likes.includes(user.id)) {
  //   const newLikes = image.likes.filter((item) => {
  //     return item._id.toString() !== user.id;
  //   });
  //   image.likes = newLikes;
  // }
  // image.save();
  // console.log(image);
  // res.sendStatus(200);
});
