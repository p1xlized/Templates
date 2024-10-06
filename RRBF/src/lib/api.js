import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // If you're using Firebase Authentication
import { getFirestore } from "firebase/firestore"; // If you're using Firestore
import { getStorage } from "firebase/storage";

/* 
! replace config here by your firebase config
* @author - P1xlized <3
*/
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
