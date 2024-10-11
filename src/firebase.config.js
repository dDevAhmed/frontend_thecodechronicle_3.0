import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYTINBtSqnEDoYVhE1l-fj5OJjyyL7vlw",
  authDomain: "modified-talon-242523.firebaseapp.com",
  projectId: "modified-talon-242523",
  storageBucket: "modified-talon-242523.appspot.com",
  messagingSenderId: "1087890891743",
  appId: "1:1087890891743:web:73e8a67b8cdcf446221a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const fireStorage = getStorage();
// export const storage = app.storage();