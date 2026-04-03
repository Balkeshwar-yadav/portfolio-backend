import express from 'express'
import Message from '../models/Message.js';

const router = express.Router()

router.post("/", async (req, res) => {
   console.log("Request body:", req.body);
  const {name, email, message} = req.body 
  try {
    const user = await Message.create({name, email, message});
    res.json({name:user.name});
    
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;