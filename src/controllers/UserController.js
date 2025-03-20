import prisma from "../utils/client.js";

class UserController {
  async index(req, res, next) {
    const users = await prisma.user.findMany({ include: { role: true } });
    res.json(users);
  }
}

export const userController = new UserController();
