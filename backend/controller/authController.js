import User from "../model/user.model.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import { gentoken } from "../config/token.js";

export const SignUp = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            res.status(400).json({message:"User already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter valid email"})
        }
        if(password.length <8){
            return res.status(400).json({message:"enter strong password"})
        }
        let hashPassword = await bcrypt.hash(password,10)

        const user = await User.create({name,email,password:hashPassword})
        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch (error) {

        console.log("signup error",error);
        return res.status(500).json({message:"signup error"})
        
    }
}


export const login = async (req,res)=>{

    try {

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"All fields required"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if(!isMatch){
            return res.status(400).json({
                message:"Password incorrect"
            })
        }

        const token = await gentoken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json({
            message:"Login successful",
            user
        })

    } catch(error){

        console.log("login error", error);

        return res.status(500).json({
            message:"Login error"
        })

    }

}

export const logout = (req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"logout successfully!"})
    } catch (error) {
        console.log("logout error",error);
        return res.status(500).json({message:"logout error"})
        
    }
}

// export const googleLogin = async(req,res)=>{
//     try {
//         let {name, email} = req.body;
//         let user = await User.findOne({email});
//         if(!user){
//             user = await User.create({
//                 name,email
//             })
//         }
        
//         let token = await gentoken(user._id)
//             res.cookie("token",token,{
//                 httpOnly:true, 
//                 secure:false,
//                 sameSite:"Strict",
//                 maxAge: 7*24*60*60*1000
//             })
//         return res.status(200).json(user)
//     } catch (error) {
//         console.log("google login error");
//         return res.status(500).json({message: "google login error"})
        
//     }
// }



export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;

        const ticket = await clientInformation.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const {name, email } = payload;

        let user = await User.findOne({email});
        if(!user){
            user = await User.create({
                name, email
            })
        }
        const jwtToken = gentoken(user._id);
        res.cookie("token", jwtToken, {
            httpOnly: true,
            sameSite: "Lax",
            secure: false,
            maxAge: 7*24*60*60*1000,
        })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Google login error"})
    }
}