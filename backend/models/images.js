import mongoose, { Schema } from "mongoose";

const imageModel = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    // comments: {
    //   type: String,
    //   ref: "User"
    // },
  },
  { timestamps: true }
);

export const Image = mongoose.model("Image", imageModel);
