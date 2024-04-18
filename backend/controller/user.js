import express from 'express'
import multer from 'multer'
import { User } from '../models/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { checkAuth } from '../middleware/checkAuth.js'

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
    if(user === null){
        res.status(401).send("falsches Passwort")
        return
    }
    const compareResult = await bcrypt.compare(password, user.password)
    if (!compareResult) {
    //   res.sendStatus(401);
        res.json({status: 'failed'})
    }else{
        const token = jwt.sign({username}, process.env.JWT_SECRET)
        res.cookie("token", token, {httpOnly:true})
        res.json({status: 'ok', token: token})}
    
})

userRouter.get('/logout', (req,res)=>{
    // document.cookie = 'token' + "max-age=0; path=/; domain=localhost"
    // document.cookie = 'token; Max-Age=0; path=/; domain=' + location.host;
    res.clearCookie('token', {domain: 'localhost', path: '/'})
    
})

userRouter.get('/:username',checkAuth,async(req,res)=>{
    const username = req.params.username
    const user = await User.findOne({username}).lean();
    res.json(user)
})