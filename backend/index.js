import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import "dotenv/config"
import {userRouter} from './controller/user.js'
import {imageRouter} from './controller/image.js'


const PORT = 3000
const app = express()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use("/user", userRouter)
app.use("/image", imageRouter)

app.listen(PORT)
console.log(`listen http://localhost:${PORT}`)