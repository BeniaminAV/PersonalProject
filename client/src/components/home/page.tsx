import { signOutUser } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import Task from "./components/task"
import Container from "../container"
import CreateTask from "./components/createTask"
import Button from "../button"
import CreateStep from "./components/createStep"

const Home = () => {
  const navigate = useNavigate()

  const signOut = async () => {
    try {
      await signOutUser()
      toast.error("Sign Out")
      navigate("/")
    } catch (error) {
      console.log(`Something went wrong`)
    }
  }

  return (
    <Container>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center mt-20">Task List</h1>
        <h2 className="text-2xl font-semibold py-5 text-center">
          Create Task and steps
        </h2>
        <div className="flex items-center justify-center mt-20 border rounded-md">
          <div className="w-full max-w-[500px] mr-2">
            <CreateTask />

            <h2 className="font-bold text-xl">Create Steps</h2>
            <p className="text-neutral-500">
              To create Step you need to take id from Task
            </p>
            <CreateStep />
          </div>

          <div className="w-full max-w-[500px] ml-2">
            <Task />
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <Button bgColor="bg-rose-500" label="Sign Out" onClick={signOut} />
      </div>
    </Container>
  )
}

export default Home
