import express from "express";
import { authController } from "../../controllers/AuthController.js";

const authRoutes = express.Router();

authRoutes.post("/login", authController.login);
authRoutes.post("/logout", authController.logout);

export default authRoutes;