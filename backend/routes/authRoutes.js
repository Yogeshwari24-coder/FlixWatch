import express, { Router } from "express"
import { googleLogin, login, logout, SignUp } from "../controller/authController.js"

const authRoutes = express.Router()

authRoutes.post("/signup",SignUp)
authRoutes.post("/login",login)
authRoutes.get("/logout",logout)
authRoutes.post("/googlelogin", googleLogin)

export default authRoutes