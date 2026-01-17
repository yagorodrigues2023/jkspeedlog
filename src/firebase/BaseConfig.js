
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/database";

const firebase = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId : import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID  
};

console.log("API KEY:", import.meta.env.VITE_FIREBASE_API_KEY);


const app = initializeApp(firebase);

export const firebaseAuth = getAuth ( app ) ; export default app ;

