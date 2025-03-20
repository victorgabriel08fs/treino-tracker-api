import { userUseCases } from "../useCases/UserUseCases.js";
import prisma from "../utils/client.js";

class UserController {
  async index(req, res) {
    const users = await userUseCases.index();
    res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await userUseCases.find(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  }

  async create(req, res) {
    const data = req.body;
    const user = await userUseCases.create(data);
    if (!user) return res.status(400).json({ message: "User not created" });
    res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    const user = await userUseCases.update(id, data);
    if (!user) return res.status(400).json({ message: "User not updated" });
    res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    const user = await userUseCases.delete(id);
    if (!user) return res.status(400).json({ message: "User not deleted" });
    res.json(user);
  }

  async import(req, res) {
    const data = req.body;
    const user = await userUseCases.import(data);
    if (!user) return res.status(400).json({ message: "User not imported" });
    res.json(user);
  }

}

export const userController = new UserController();
