import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicCP1eSE2y8evr9Pmoo42Sk6XzuYUr14",
  authDomain: "netflix-clone-e6174.firebaseapp.com",
  projectId: "netflix-clone-e6174",
  storageBucket: "netflix-clone-e6174.appspot.com",
  messagingSenderId: "59217377390",
  appId: "1:59217377390:web:0ca1bb2d20e8626842ce7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
