import express from "express";
import { userController } from "../../controllers/UserController.js";
import { adminMiddleware } from "../../middlewares/AdminMiddleware.js";
const usersRoutes = express.Router();

usersRoutes.get("/", adminMiddleware.handle, userController.index);
usersRoutes.get("/:id", userController.show);

export default usersRoutes;
