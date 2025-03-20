import express from "express";
const usersRoutes = express.Router();

usersRoutes.use("/", (req, res) => res.json({ message: "Users" }));

export default usersRoutes;