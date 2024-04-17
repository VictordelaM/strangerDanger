import express from 'express'
import multer from 'multer'
import { User } from '../models/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const userRouter = express.Router()
const mult = multer()


userRouter.post('/register', mult.none(), async(req, res)=>{
    const {username, password, email} = req.body
    if(!username||!password||!email){
        res.sendStatus(403)
        return
    }
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({username, password:hash, email})
    res.json(user)
})

userRouter.post('/login', mult.none() , async(req,res)=>{
    const {username, password, email} = req.body
    if(!username || !password){
        res.sendStatus(403)
        return 
    }
    const user = await User.findOne({username}).lean()
    console.log('user:', user)
    if(user === null){
        res.status(401).send("falsches Passwort")
        return
    }
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      res.sendStatus(401);
    }
    const token = jwt.sign({username}, process.env.JWT_SECRET)
    res.cookie("token", token)
    res.json({status: 'ok', token: token})
})

userRouter.get('/:username', async(req,res)=>{
    const username = req.params.username
    const user = await User.findOne({username}).lean();
    res.json(user)
})