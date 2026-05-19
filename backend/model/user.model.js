import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        requried:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true, minimize:false})

const User = mongoose.model("User",userSchema);
export default User;