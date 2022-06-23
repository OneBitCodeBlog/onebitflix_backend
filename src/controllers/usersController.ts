import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  // GET /users/current
  show: async (req: AuthenticatedRequest, res: Response) => {
    try {
      const currentUser = req.user!
      return res.json(currentUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /users/current/watching
  watching: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!

    try {
      const watching = await userService.getKeepWatchingList(id)
      return res.json(watching)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}