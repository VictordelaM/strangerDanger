import mongoose, { Schema } from "mongoose";


const userModel =new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    emailVerified:{
        type: Boolean,
        default: false
    },
    balance:{
        type: Number,
        default: 0
    }
})

export const User = mongoose.model('User', userModel)