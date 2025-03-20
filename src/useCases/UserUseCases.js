import prisma from "../utils/client.js";

class UserUseCases {
  async index() {
    const users = await prisma.user.findMany({
      include: {
        role: true,
        workouts: {
          include: { exercises: true },
        },
      },
    });
    return users;
  }

  async find(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        workouts: {
          include: { exercises: true },
        },
      },
    });
    return user;
  }

  async findByEmail(email) {
    const user = await prisma.user.findFirst({
      where: { email },
      include: { role: true },
    });
    return user;
  }

  async create(data) {
    const user = await prisma.user.create({ data });
    return user;
  }

  async update(id, data) {
    const user = await prisma.user.update({ where: { id }, data });
    return user;
  }

  async delete(id) {
    const user = await prisma.user.delete({ where: { id } });
    return user;
  }

  async import(data) {
    const user = await prisma.user.create({ data });
    return user;
  }

}

export const userUseCases = new UserUseCases();
