import express, {Router } from "express"
import {User} from "../models/users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {mail} from "../utils/mail.js"
import crypto from "crypto"

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
  const users = await User.find().lean()
  res.json(users)
})

























export default userRouter