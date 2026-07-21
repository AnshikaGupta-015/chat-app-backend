import express from "express";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";


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

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})