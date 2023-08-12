import { createUserDocumentForAuth } from "../db/userDoc"
import {
  createUserAuthWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../db/users"
import express from "express"

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { displayName, email, password, confirmPassword } = req.body

    if (!displayName || !email || !password || !confirmPassword) {
      return res.sendStatus(403)
    }

    if (password !== confirmPassword) {
      return res.sendStatus(403)
    }

    // @ts-ignore */}
    const { user } = await createUserAuthWithEmailAndPassword(email, password)

    await createUserDocumentForAuth(user, { displayName })
    return res.status(200).json(user).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.sendStatus(403)
    }

    const existingUser = await signInAuthWithEmailAndPassword(email, password)

    return res.status(200).json(existingUser).end()
  } catch (error) {
    console.error("Login error:", error)
    return res.status(400).json({ message: "Login failed" }).end()
  }
}
