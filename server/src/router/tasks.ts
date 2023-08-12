import { getAllTasks } from "../controllers/getTasks"
import express from "express"

export default (router: express.Router) => {
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await getAllTasks()
      return res.status(200).json(tasks)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: "Internal server error" })
    }
  })
}
