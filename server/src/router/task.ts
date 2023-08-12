import { addStepsToTask, taskName } from "../controllers/task"
import express from "express"

export default (router: express.Router) => {
  router.post("/task", taskName)
  router.post("/task/addSteps", addStepsToTask)
}
