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
    const role = await prisma.role.findFirst({ where: { name: "user" } });
    const userAlreadyExists = await prisma.user.findFirst({
      where: { email: data.email },
    });
    if (userAlreadyExists) return null;
    const userData = {
      name: data.name,
      username: data.username,
      email: data.email,
      roleId: role.id,
    };
    const user = await prisma.user.create({ data: userData });
    data.workouts.map(async (workoutData) => {
      let workout = await prisma.workout.create({
        data: {
          name: workoutData.name,
          date: new Date(workoutData.date),
          duration: workoutData.duration,
          realDuration: workoutData?.realDuration,
          notes: workoutData?.notes,
          workoutType: workoutData.workoutType,
          userId: user.id,
        },
      });
      workoutData.exercises.map(async (exercise) => {
        await prisma.exercise.create({
          data: {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            isCompleted: exercise.isCompleted,
            workoutId: workout.id,
          },
        });
      });
    });
    return user;
  }
}

export const userUseCases = new UserUseCases();
