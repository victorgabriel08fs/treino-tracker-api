import express from "express";
import { workoutController } from "../../controllers/WorkoutController.js";

const workoutsRoutes = express.Router();

workoutsRoutes.get("/", workoutController.index);
workoutsRoutes.get("/:id", workoutController.show);
workoutsRoutes.post("/", workoutController.create);
workoutsRoutes.put("/:id", workoutController.update);
workoutsRoutes.delete("/:id", workoutController.delete);

export default workoutsRoutes;