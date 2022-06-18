import { Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export const authController = {
  // POST /auth/register
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, birth, phone } = req.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)

      if (userAlreadyExists) {
        throw new Error('Este e-mail já está cadastrado.')
      }

      const user = await userService.create({
        firstName,
        lastName,
        birth,
        phone,
        email,
        password,
        role: 'user'
      })

      return res.status(201).json(user)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const user = await userService.findByEmail(email)

      if (!user) return res.status(404).json({ message: 'E-mail não registrado.' })

      user.checkPassword(password, (err, isSame) => {
        if (err) return res.status(400).json({ message: err.message })
        if (!isSame) return res.status(401).json({ message: 'Senha incorreta' })

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }

        const token = jwtService.signToken(payload, '7d')

        return res.json({ authenticated: true, ...payload, token})
      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}