import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore"
import { app } from "./firebase"

// create userDoc with db firestore
const db = getFirestore(app)

export const createUserDocumentForAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.email)

  const onSnapshot = await getDoc(userDocRef)

  if (!onSnapshot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userDocRef
}
