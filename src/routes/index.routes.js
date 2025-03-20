import express from "express";
import authRoutes from "./public/auth.routes.js";
import { autenticateMiddleware } from "../middlewares/AutenticateMiddleware.js";
import usersRoutes from "./private/users.routes.js";
import publicRoutes from "./public/public.routes.js";
import privateRoutes from "./private/private.routes.js";

const routes = express.Router();

routes.use(publicRoutes);
routes.use(autenticateMiddleware.handle, privateRoutes);

export default routes;
