import prisma from "./client.js";

class Seeders {
  async createRoles() {
    var roles = [
      {
        name: "admin",
        level: 1000,
      },
      {
        name: "user",
        level: 1,
      },
    ];
    roles.map(async (role) => {
      const roleAlreadyExists = await prisma.role.findUnique({
        where: { name: role.name },
      });
      if (roleAlreadyExists) return;
      await prisma.role.create({ data: role });
    });
  }
  async createAdmin() {
    var randomNum = Math.floor(Math.random() * 10000);
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: `admin${randomNum}@email.com` },
    });
    while (userAlreadyExists) {
      randomNum = Math.floor(Math.random() * 10000);
      userAlreadyExists = await prisma.user.findUnique({
        where: { email: `admin${randomNum}@email.com` },
      });
    }
    const role = await prisma.role.findFirst({ where: { name: "admin" } });
    if (!role) this.createRoles();

    const user = await prisma.user.create({
      data: {
        name: `admin${randomNum}`,
        username: `admin${randomNum}`,
        email: `admin${randomNum}@email.com`,
        password: null,
        roleId: role.id,
      },
    });
    console.log(user);
  }
}

const seeders = new Seeders();
seeders.createRoles();
seeders.createAdmin();
