import express from 'express';
import authRoutes from './public/auth.routes.js';
import { autenticateMiddleware } from '../middlewares/AutenticateMiddleware.js';
import usersRoutes from './private/users.routes.js';

const routes = express.Router();

routes.use('/auth', authRoutes);
routes.use('/users', autenticateMiddleware.handle, usersRoutes);

export default routes;