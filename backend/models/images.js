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
    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],
    // comments: {
    //   type: String,
    //   ref: "User"
    // },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = mongoose.model("Image", imageModel);
