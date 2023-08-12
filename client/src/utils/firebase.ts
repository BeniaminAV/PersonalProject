import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCd1AX6cCIh8WjXCFM3jMYgq_LlKyZ-cns",
  authDomain: "siemens-test-120e4.firebaseapp.com",
  projectId: "siemens-test-120e4",
  storageBucket: "siemens-test-120e4.appspot.com",
  messagingSenderId: "733098075470",
  appId: "1:733098075470:web:febaabd8c6bf3d149d6a1f",
}

export const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback)
