import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js"
dotenv.config();
let port = process.env.PORT || 7000

let app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "https://flix-watch-git-main-yogeshwariahirwar88-5736s-projects.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


app.use((req, res, next) => {
  res.setHeader(
    "Cross-Origin-Opener-Policy",
    "same-origin-allow-popups"
  );
  next();
});

app.use("/api/auth",authRoutes)



const startServer = async () => {
  try {
    await connectDB(); 
    console.log("DB connected");

    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });


  } catch (error) {
    console.log(error);
  }
};

startServer();