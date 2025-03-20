import { exerciseUseCases } from "../useCases/ExerciseUseCases.js";

class ExerciseController {
  async alternate(req, res) {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const exercise = await exerciseUseCases.alternate(id, isCompleted);
    if (!exercise)
      return res.status(400).json({ message: "Exercise not updated" });
    res.json(exercise);
  }
}

export const exerciseController = new ExerciseController();
