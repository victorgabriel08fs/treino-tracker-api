import express from "express";
import { exerciseController } from "../../controllers/ExerciseController.js";

const exercisesRoutes = express.Router();

exercisesRoutes.post("/:id", exerciseController.alternate);

export default exercisesRoutes;