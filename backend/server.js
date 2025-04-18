import express from "express";
import User from "./models/userModel.js";
import "./db.js"; // Import the MongoDB connection file
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/authSession.route.js";
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary'
import multer from "multer";
import fs from 'fs'

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Home Route
app.get("/", (req, res) => {
  res.send("Hello guys");
});

// routes
app.use("/user", userRouter);
app.use("/auth", authRouter);

// Multer setup (store in memory or disk temporarily)
const upload = multer({ dest: "uploads/" });

    // Configuration
    cloudinary.config({ 
      cloud_name: 'da4j2rlvs', 
      api_key: '755321251384572', 
      api_secret: "5IlrRSAx4J5DIDU7pE2GIlVqoHY" // Click 'View API Keys' above to copy your API secret
  });

app.post("/upload", upload.single("pdf"),async (req,res)=>{
  try {
    console.log("request received")
    console.log(req.file)
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "CSN", // Optional folder in Cloudinary
      public_id: req.file.originalname.split(".")[0], // Optional: keep original name
    });
  
      // Remove local file
    fs.unlinkSync(req.file.path);

    return res.json({success:true,result})
  } catch (error) {
    console.log(error.message)
    return res.json({success:false})
  }
})

// Port Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
