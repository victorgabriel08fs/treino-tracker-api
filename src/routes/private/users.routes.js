import express from "express";
import { userController } from "../../controllers/UserController.js";
const usersRoutes = express.Router();

usersRoutes.get("/", userController.index);
usersRoutes.get("/:id", userController.show);

export default usersRoutes;
