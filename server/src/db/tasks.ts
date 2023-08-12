import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore"
import { app } from "./firebase"

const db = getFirestore(app)

export const createUserTask = async (userTask: any) => {
  const tasksCollection = collection(db, "tasks")

  try {
    const { titleTask, owner } = userTask
    const createdAt = new Date()

    const taskData = {
      titleTask,
      owner,
      createdAt,
    }

    const docRef = await addDoc(tasksCollection, taskData)

    return docRef
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateTaskSteps = async (taskId: string, newSteps: any[]) => {
  const taskDocRef = doc(db, "tasks", taskId)

  try {
    await updateDoc(taskDocRef, { steps: newSteps })
  } catch (error) {
    console.error(error)
    throw error
  }
}
