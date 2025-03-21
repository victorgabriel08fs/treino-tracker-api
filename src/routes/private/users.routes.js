import express from "express";
import { userController } from "../../controllers/UserController.js";
import { adminMiddleware } from "../../middlewares/AdminMiddleware.js";
const usersRoutes = express.Router();

usersRoutes.get("/",  userController.index);
usersRoutes.get("/:id", adminMiddleware.handle, userController.show);
usersRoutes.post("/", adminMiddleware.handle, userController.create);
usersRoutes.put("/:id", adminMiddleware.handle, userController.update);
usersRoutes.delete("/:id", adminMiddleware.handle, userController.delete);
usersRoutes.post("/import", adminMiddleware.handle, userController.import);

export default usersRoutes;
