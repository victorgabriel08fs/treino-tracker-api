import { auth } from "../utils/Auth.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await auth.login({email, password});
    if(!user) return res.status(401).json({ message: "Invalid credentials" });
    const token = await auth.generateToken(user);

    res.status(200).json({ user, token, message: "Login successful" });
  }

  async logout(req, res) {
    res.status(200).json({ message: "Logout successful" });
  }
}

export const authController = new AuthController();
