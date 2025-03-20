import prisma from "../utils/client.js";

class ExerciseUseCases {
  async index(workoutId) {
    const exercises = await prisma.exercise.findMany({
      where: { workoutId },
    });
    return exercises;
  }

  async create(data) {
    const exercise = await prisma.exercise.create({ data });
    return exercise;
  }

  async update(id, data) {
    const exercise = await prisma.exercise.update({ where: { id }, data });
    return exercise;
  }

  async delete(id) {
    const exercise = await prisma.exercise.delete({ where: { id } });
    return exercise;
  }

  async find(id) {
    const exercise = await prisma.exercise.findUnique({ where: { id } });
    return exercise;
  }

  async alternate(id, isCompleted) {
    const exercise = await prisma.exercise.update({
      where: { id },
      data: { isCompleted },
    });
    return exercise;
  }
}

export const exerciseUseCases = new ExerciseUseCases();
