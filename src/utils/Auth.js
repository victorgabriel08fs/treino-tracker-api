import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "./client.js";

class Auth {
  async verify(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  async generateToken(user) {
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "3h" });
    return token;
  }

  async login(data) {
    const { email, password } = data;
    var user = await prisma.user.findFirst({ where: { email } });
    if (!user) return null;
    if (user.password === null) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await prisma.user.update({
          where: { id: user.id },
          data: { password: hash },
        });

      } catch (error) {
        console.error("Erro ao atualizar senha:", error);
      }
    }
    user = await prisma.user.findFirst({ where: { email } });
    const isValid = await this.comparePassword(password, user.password);
    if (!isValid) return null;
    return user;
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

export const auth = new Auth();
