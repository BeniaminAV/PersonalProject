import express from "express"
import authentication from "./authentication"
import task from "./task"
import tasks from "./tasks"

const router = express.Router()

export default (): express.Router => {
  authentication(router)
  task(router)
  tasks(router)
  return router
}
