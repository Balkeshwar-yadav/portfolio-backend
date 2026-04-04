import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import messageRoutes from './routes/messageRoutes.js';
import dotenv from "dotenv";

dotenv.config();  // Load .env variables
const app = express();

const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173', // frontend dev
  'https://portfolio-website-eight-gamma-82.vercel.app' // production
];


app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow non-browser requests like Postman
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('CORS not allowed'), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

app.get('/', (req ,res)=>{
   res.send("Api is running on Portfolio-Website");
})

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// DB
mongoose.connect(MONGO_URI)
.then(()=>console.log("Mongodb Connected...!"))
.catch((err)=>console.log(err));

// Routes


app.use('/api', messageRoutes);



app.listen(PORT, () => console.log("Server running on port 5000"));