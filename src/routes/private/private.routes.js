import express from "express";
import usersRoutes from "./users.routes.js";
import workoutsRoutes from "./workouts.routes.js";
import exercisesRoutes from "./exercises.routes.js";

const privateRoutes = express.Router();

privateRoutes.use("/users", usersRoutes);
privateRoutes.use("/workouts", workoutsRoutes);
privateRoutes.use("/exercises", exercisesRoutes);

export default privateRoutes;
