import express from "express";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";


import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";


dotenv.config();



const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin:["http://localhost:5173"],
      credentials:true
    
  })
)

//ROUTES
app.use("/api/auth" , authRoutes);

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
  connectDB();
})