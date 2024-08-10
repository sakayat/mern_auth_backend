import { Router } from "express";
import { checkAuth, forgetPassword, login, resetPassword, signup, verifyEmail } from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail)

router.post("/forget-password", forgetPassword)

router.post("/reset-password/:token", resetPassword)

export default router;
