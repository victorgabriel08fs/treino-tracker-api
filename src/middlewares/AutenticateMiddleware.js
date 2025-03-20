import { auth } from "../utils/Auth.js";

class AutenticateMiddleware {
    async handle(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "Token not found" });
        }
        return auth.verify(req, res, next); // ✅ Apenas essa chamada já executa `next()`
    }
}

export const autenticateMiddleware = new AutenticateMiddleware();
