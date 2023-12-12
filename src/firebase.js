// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd3wP3uum3KKNZGT2vqcqVFEdrqQS3jUs",
  authDomain: "ontako-auth.firebaseapp.com",
  projectId: "ontako-auth",
  storageBucket: "ontako-auth.appspot.com",
  messagingSenderId: "546126126170",
  appId: "1:546126126170:web:f2529e5e56c4f2df60cc63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;