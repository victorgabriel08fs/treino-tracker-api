import prisma from "../utils/client.js";

class UserController {
  async index(req, res) {
    const users = await prisma.user.findMany({
      include: {
        role: true,
        workouts: {
          include: {
            exercises: true,
          },
        },
      },
    });
    return res.json(users);
  }
}

export const userController = new UserController();
