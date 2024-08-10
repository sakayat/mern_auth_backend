import { Router } from "express";
import { forgetPassword, login, resetPassword, signup, verifyEmail } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail)

router.post("/forget-password", forgetPassword)

router.post("/reset-password/:token", resetPassword)

export default router;
