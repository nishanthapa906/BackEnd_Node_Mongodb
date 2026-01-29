

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    Age: Number
})


const User=mongoose.model('User' , userSchema )


export default User;