import React, { useState } from "react"
import Button from "../../button"

interface TaskProps {
  task: {
    id: string
    titleTask: string
    owner: string
    steps: string[]
    createdAt: {
      seconds: number
      nanoseconds: number
    }
  }
}

const TaskDirectory: React.FC<TaskProps> = ({ task }) => {
  const [expanded, setExpanded] = useState(false)
  const [showSteps, setShowSteps] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const toggleShowSteps = () => {
    setShowSteps(!showSteps)
  }

  return (
    <div key={task.id} className="w-full">
      <h2 className="font-bold text-lg">Name Task: {task.titleTask}</h2>
      <p className="text-black font-semibold">
        Owner: {task.owner}{" "}
        <strong className="text-rose-600">id: {task.id}</strong>
      </p>
      <Button
        onClick={toggleExpanded}
        label={expanded ? "Hide Details" : "Show Details"}
        bgColor={
          expanded ? "bg-rose-500 text-white" : "bg-green-500 text-white"
        }></Button>

      {expanded && (
        <div>
          <Button
            onClick={toggleShowSteps}
            label={showSteps ? "Hide Steps" : "Show Steps"}
            bgColor={
              expanded ? "bg-green-500 text-white" : " text-black"
            }></Button>
          {showSteps && (
            <div>
              {Array.isArray(task.steps) && task.steps.length > 0 ? (
                <div>
                  <p>Steps:</p>
                  <ul className="overflow-y-auto h-[100px]">
                    {task.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No steps available.</p>
              )}
            </div>
          )}

          <p className="font-bold text-sm text-center">
            Created At:{" "}
            {new Date(task.createdAt.seconds * 1000).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  )
}

export default TaskDirectory
