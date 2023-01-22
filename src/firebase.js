import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABEHCuMec-L_kRUPAaKgXxzFYiePJqZC0",
  authDomain: "login-9b69b.firebaseapp.com",
  projectId: "login-9b69b",
  storageBucket: "login-9b69b.appspot.com",
  messagingSenderId: "133176360355",
  appId: "1:133176360355:web:aa3cbfefd1dd5f65466e16"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
