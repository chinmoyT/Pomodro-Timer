// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8n55Gdq35qYnceVQA5i2nUKYGaPYrrnw",
  authDomain: "njwbfjd.firebaseapp.com",
  databaseURL: "https://njwbfjd-default-rtdb.firebaseio.com",
  projectId: "njwbfjd",
  storageBucket: "njwbfjd.appspot.com",
  messagingSenderId: "759024699998",
  appId: "1:759024699998:web:afd249dc7606fd9e2b02cf",
  measurementId: "G-2PSFKEGRMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)