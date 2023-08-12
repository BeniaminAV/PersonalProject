import { User, getAuth } from "firebase/auth"
import { createUserTask, updateTaskSteps } from "../db/tasks"
import express from "express"
import { app } from "../db/firebase"

export const taskName = async (req: express.Request, res: express.Response) => {
  try {
    const { titleTask } = req.body

    const auth = getAuth(app)
    const user: User = auth.currentUser

    if (!user) {
      return res.status(401).json({ message: "User not authenticated" }).end()
    }

    const userTask = {
      titleTask,
      owner: user.email,
    }

    await createUserTask(userTask)
    return res.status(200).json({ message: "Task created successfully" }).end()
  } catch (error) {
    console.error(error)
    return res.sendStatus(400)
  }
}

export const addStepsToTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { taskId, steps } = req.body

    const auth = getAuth(app)
    const user: User = auth.currentUser

    if (!user) {
      return res.status(401).json({ message: "User not authenticated" }).end()
    }

    await updateTaskSteps(taskId, steps)

    return res.status(200).json({ message: "Steps added successfully" }).end()
  } catch (error) {
    console.error(error)
    return res.sendStatus(400)
  }
}
