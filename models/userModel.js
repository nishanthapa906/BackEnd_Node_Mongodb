

import mongoose from "mongoose";

const userSchema = new mongoose.userSchema({
    name:String,
    Age: Number
})


const User = mongoose.model("User" ,userSchema )


export default User;