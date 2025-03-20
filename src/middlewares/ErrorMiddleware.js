class ErrorMiddleware {
    handle(err, req, res, next) {
        console.error("Erro:", err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export const errorMiddleware = new ErrorMiddleware();