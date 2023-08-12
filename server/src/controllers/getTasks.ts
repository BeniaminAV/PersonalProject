import { app } from "../db/firebase"
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const getAllTasks = async () => {
  try {
    const db = getFirestore(app)
    const tasksCollection = collection(db, "tasks")
    const querySnapshot = await getDocs(tasksCollection)
    const tasks: any = []

    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() })
    })

    return tasks
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch tasks")
  }
}
