import express from "express";
import { login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewaares/uth.middleware.js";
import checkAuth from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup" , signup);
router.post("/login" , login);
router.post("/logout" , logout);
router.get("/check", protectRoute, checkAuth)

router.put("/update-profile" , protectRoute , updateProfile);


export default router;