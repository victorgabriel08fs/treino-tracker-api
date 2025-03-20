import prisma from "../utils/client.js";

class UserController {
  async index(req, res) {
    try {
      const users = await prisma.user.findMany({
        include: {
          role: true,
        },
      });
      return res.json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return res.status(500).json({ message: "Erro ao buscar usuários" });
    }
  }
}

export const userController = new UserController();
