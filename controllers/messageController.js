import Message from '../models/Message.js';
import { sendContactEmail } from '../utils/email.js';

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = await Message.create({ name, email, message });

    // Send email to owner (async)
    sendContactEmail({ name, email, message });

    
    res.json({name:newMessage.name});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};