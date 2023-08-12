import { useState, useEffect } from "react"
import axios from "axios"
import TaskDirectory from "./taskDirectory"

interface Task {
  id: string
  titleTask: string
  owner: string
  steps: string[]
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

const Task = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTask = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks")
      setTasks(response.data)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <TaskDirectory task={task} />
          </div>
        )
      })}
    </>
  )
}

export default Task
