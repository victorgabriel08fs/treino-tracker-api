import { exerciseUseCases } from "../useCases/ExerciseUseCases.js";
import { workoutUseCases } from "../useCases/WorkoutUseCases.js";

class WorkoutController {
  async index(req, res) {
    const userId = req.user.id;
    const workouts = await workoutUseCases.index(userId);
    res.json(workouts);
  }

  async show(req, res) {
    const { id } = req.params;
    const workout = await workoutUseCases.find(id);
    if (!workout) return res.status(404).json({ message: "Workout not found" });
    res.json(workout);
  }

  async create(req, res) {
    try {
      var { workout, exercises } = req.body;
      const userId = req.user.id;
      workout = { ...workout, date: new Date(workout.date) };
      const createdWorkout = await workoutUseCases.create({
        ...workout,
        userId,
      });
      if (!createdWorkout)
        return res.status(400).json({ message: "Workout not created" });

      await Promise.all(
        exercises.map(async (exercise) => {
          await exerciseUseCases.create({
            ...exercise,
            workoutId: createdWorkout.id,
          });
        })
      );

      res.json(createdWorkout);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    const userId = req.user.id;
    const workout = await workoutUseCases.update(id, { ...data, userId });
    if (!workout)
      return res.status(400).json({ message: "Workout not updated" });
    res.json(workout);
  }

  async delete(req, res) {
    const { id } = req.params;
    const workout = await workoutUseCases.delete(id);
    if (!workout)
      return res.status(400).json({ message: "Workout not deleted" });
    res.json(workout);
  }
}

export const workoutController = new WorkoutController();
