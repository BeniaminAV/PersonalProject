import { useState } from "react"
import FormField from "../../input"
import axios from "axios"
import Button from "../../button"
import { toast } from "react-hot-toast"

const defaultFormField = {
  titleTask: "",
}

const CreateTask = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { titleTask } = formField

  const onSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post("http://localhost:5000/task", { titleTask }, config)
      toast.success("Task created, refresh page please")
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
          label="Task Name"
          type="text"
          name="titleTask"
          value={titleTask}
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

export default CreateTask
