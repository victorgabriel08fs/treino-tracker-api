import { exerciseUseCases } from "../useCases/ExerciseUseCases.js";

class ExerciseController {
  async alternate(req, res) {
    const { id } = req.params;
    const exercise = await exerciseUseCases.alternate(id);
    if (!exercise)
      return res.status(400).json({ message: "Exercise not exists" });
    res.json(exercise);
  }
}

export const exerciseController = new ExerciseController();
