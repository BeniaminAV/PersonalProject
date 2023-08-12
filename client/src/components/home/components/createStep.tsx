import { useState } from "react"
import FormField from "../../input"
import axios from "axios"
import Button from "../../button"
import { toast } from "react-hot-toast"

const defaultFormField = {
  taskId: "",
  steps: "",
}

const CreateStep = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { taskId, steps } = formField

  const onSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:5000/task/addSteps",
        { taskId, steps },
        config
      )
      toast.success("Step created, refresh page please")
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
        <FormField
          label="ID Task"
          type="text"
          name="taskId"
          value={taskId}
          onChange={handleChange}
        />
        <FormField
          label="Step Name"
          type="text"
          name="steps"
          value={steps}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="Create Task"
          bgColor="bg-green-300 text-black"
        />
      </form>
    </div>
  )
}

export default CreateStep
