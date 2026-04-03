import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/Contact.js'
import dotenv from "dotenv";

dotenv.config();  // Load .env variables
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// DB
mongoose.connect(MONGO_URI,{
   dbName:"Poftfolio-website"
}).then(()=>console.log("Mongodb Connected...!")).catch((err)=>console.log(err));

// Routes
app.use("/api/contact", authRoutes);



app.listen(PORT, () => console.log("Server running on port 5000"));