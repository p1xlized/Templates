import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // If you're using Firebase Authentication
import { getFirestore } from "firebase/firestore"; // If you're using Firestore
import { getStorage } from "firebase/storage";

/* 
! replace config here by your firebase config
* @author - P1xlized <3
*/
const firebaseConfig = {
  apiKey: "AIzaSyBuIFftuZc_Y6bgKhBgYTMAtjVar40Ymic",
  authDomain: "template-6c592.firebaseapp.com",
  projectId: "template-6c592",
  storageBucket: "template-6c592.appspot.com",
  messagingSenderId: "479343826257",
  appId: "1:479343826257:web:84be755b2d69a1d09a2f70",
  measurementId: "G-XQ7D9F1856",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
