import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookies } from "../utils/generateTokenAndSetCookies.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const exitsUser = await User.findOne({ email });

    if (exitsUser) {
      return res.status(400).json({ message: "user already exits" });
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    
    const user = new User({
        email,
        password: hashPassword,
        name,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
    })
    await user.save()

    // // jwt
    generateTokenAndSetCookies(res, user._id)

    res.status(201).json({
        success: true,
        message: "user created successfully",
        user: {
            ...user._doc,
            password: undefined
        }
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
