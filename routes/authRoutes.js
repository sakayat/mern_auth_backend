import { Router } from "express";
import { login, resetPassword, signup, verifyEmail } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail)

router.post("/reset-password", resetPassword)

export default router;
