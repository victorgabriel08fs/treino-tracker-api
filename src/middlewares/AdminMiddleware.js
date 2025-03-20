class AdminMiddleware{
    async handle(req, res, next) {
        const user = req.user;
        if (user.role.level < 500) return res.status(401).json({ message: "Unauthorized" });
        next();
    }
}

export const adminMiddleware = new AdminMiddleware();