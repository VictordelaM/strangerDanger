import express from "express";
import multer from "multer";
import { User } from "../models/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { checkAuth } from "../middleware/checkAuth.js";

export const userRouter = express.Router();
const mult = multer();

userRouter.post("/register", mult.none(), async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.sendStatus(403);
    return;
  }
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ username, password: hash, email });
  res.json(user);
});

userRouter.post("/login", mult.none(), async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    res.sendStatus(403);
    return;
  }
  const user = await User.findOne({ username }).lean();
  if (user === null) {
    res.status(401).send("falsches Passwort");
    return;
  }
  const compareResult = await bcrypt.compare(password, user.password);
  if (!compareResult) {
    //   res.sendStatus(401);
    res.json({ status: "failed" });
  } else {
    const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.json({ status: "ok", token: token });
  }
});

userRouter.get("/logout", (req, res) => {
  // document.cookie = 'token' + "max-age=0; path=/; domain=localhost"
  // document.cookie = 'token; Max-Age=0; path=/; domain=' + location.host;
  res.clearCookie("token");
  res.end();
});

userRouter.get("/:username", checkAuth, async (req, res) => {
  // const {username} = req.body
  const username = req.params.username;
  const user = await User.findOne({ username }).lean();
  res.json(user);
});

userRouter.post("/checkRepeatName", mult.none(), async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username }).lean();
    if (user) {
      res.json({ checkNameStatus: "username already exists" });
    } else {
      res.json({ checkNameStatus: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/checkRepeatEmail", mult.none(), async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }).lean();
    if (user) {
      res.json({ checkMailStatus: "email already exists" });
    } else {
      res.json({ checkMailStatus: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
