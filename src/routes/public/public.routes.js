import express from "express";
import authRoutes from "./auth.routes.js";

const publicRoutes = express.Router();

publicRoutes.use("/auth", authRoutes);

export default publicRoutes;