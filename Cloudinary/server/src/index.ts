import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import asyncHandler from "express-async-handler";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import cors from "cors";
import fs from "fs";

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

app.post('/upload', upload.single('image'), asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'uploads'
  });
  
  fs.unlinkSync(req.file.path);
  
  res.status(200).json({
    success: true,
    imageUrl: result.secure_url,
    publicId: result.public_id
  });
}));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'An error occurred during processing'
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
