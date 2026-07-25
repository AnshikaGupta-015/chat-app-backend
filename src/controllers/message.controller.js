import User from "../models/user.model.js";
import Message from "../models/message.models.js";

import cloudinary from "../lib/cloudinary.js";



export const getUsersForSidebar = async (req, res) => {
  // fetch all users except the logged-in one
  try {
     const loggedInUserId = req.user._id;
     const filteredUsers =  await User.find({_id:{$ne:loggedInUserId}}).select("-password");

     res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.staatus(500).json({ error:"Internal server error"});
  }
};

export const getMessages = async (req, res) => {
  // fetch messages between logged-in user and :id
  try {
     const {id:userToChatId} = req.params;
     const myId = req.user._id;

     const messaage = await Message.find({
       $or:[
         {senderId:myId , receivedId:userToChatId},
         {senderId:userToChatId , receivedId:myId}
       ]
     })

     res.status(200).json(messaage);


  } catch (error) {
    console.error("Error in getMessage: ", error.message);
    res.staatus(500).json({ error:"Internal server error"});
  }
};

export const sendMessage = async (req, res) => {
  // send a message to :id
  try {
     const {text , image} = req.body;
     const {id:receiverId} = req.params;

     const senderId = req.user._id;

     let imageUrl;
     if(imaage){
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url; 
     }
     
     const newMessage = new Message({
          senderId,
          receiverId,
          text,
          image:imageUrl
     })

     await newMessage.save();

    //  todo: implement socket io to send message to receive for realtime chat

    res.status(200).json(newMessage);

  } catch (error) { 
     console.error("Error in sendMessage: ", error.message);
     res.staatus(500).json({ error:"Internal server error"});
  }
};