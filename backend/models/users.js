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
    pictureUrl:{
        type: String,
        default:'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
    }
})

export const User = mongoose.model('User', userModel)