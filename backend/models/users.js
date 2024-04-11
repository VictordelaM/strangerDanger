import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	emailVerified: {
		type: Boolean,
		required: true,
		default: false,
	},
	verificationCode: {
		type: Number,
	},
},
{
  timestamps: true,
});

export const User = mongoose.model("User", userSchema)