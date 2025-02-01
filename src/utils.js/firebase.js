// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSsbtPOy7ZhVschda7aiEaMTz8YdWktuQ",
  authDomain: "netflix-gpt-b15c9.firebaseapp.com",
  projectId: "netflix-gpt-b15c9",
  storageBucket: "netflix-gpt-b15c9.firebasestorage.app",
  messagingSenderId: "621424168281",
  appId: "1:621424168281:web:12d01ec576a6e205489048",
  measurementId: "G-QQTC8ZLYYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();