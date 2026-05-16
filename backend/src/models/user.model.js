const mongoose=require("mongoose")
const { type } = require("node:os")

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        unique: [true,"User already exists. "],
        required: true
    },
    

    email:{
        type: String,
        unique:[true,"User already exists. "]
    },
    password:{
        type: String,
        required: true
    }
})

const UserModel= mongoose.model("users",userSchema)
module.exports= UserModel