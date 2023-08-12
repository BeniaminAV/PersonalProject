import {
  collection,
  getDocs,
  doc,
  getFirestore,
  addDoc,
} from "firebase/firestore"
import { app } from "./firebase"

export interface Step {
  taskId: string
  description: string
  createdAt: Date
}

const db = getFirestore(app)

export const getStepsForTask = async (taskId: string) => {
  const taskDocRef = doc(db, "tasks", taskId)
  const stepsCollectionRef = collection(taskDocRef, "steps")

  const stepsSnapshot = await getDocs(stepsCollectionRef)

  const steps: Step[] = []
  stepsSnapshot.forEach((stepDoc) => {
    const stepData = stepDoc.data() as Step
    stepData.taskId = taskId 
    steps.push(stepData)
  })

  return steps
}

export const createStepForTask = async (taskId: string, step: Step) => {
  const taskDocRef = doc(db, "tasks", taskId);
  const stepsCollectionRef = collection(taskDocRef, "steps");

  try {
    await addDoc(stepsCollectionRef, step);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
