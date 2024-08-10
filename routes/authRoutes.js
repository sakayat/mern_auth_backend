import { Router } from "express";
import { login, signup, verifyEmail } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail)

export default router;
