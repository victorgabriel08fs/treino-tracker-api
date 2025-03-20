import prisma from "../utils/client.js";

class WorkoutUseCases {
  async index(userId) {
    const workouts = await prisma.workout.findMany({
      where: { userId },
      include: { exercises: true },
    });
    return workouts;
  }

  async find(id) {
    const workout = await prisma.workout.findUnique({
      where: { id },
      include: { exercises: true },
    });
    return workout;
  }

  async create(data) {
    const workout = await prisma.workout.create({ data });
    return workout;
  }

  async update(id, data) {
    const workout = await prisma.workout.update({ where: { id }, data });
    return workout;
  }

  async delete(id) {
    const workout = await prisma.workout.delete({ where: { id } });
    return workout;
  }
}

export const workoutUseCases = new WorkoutUseCases();