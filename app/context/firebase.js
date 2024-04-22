import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwMkotPWaF5LUtQIkkM89uq325KJtpNgE",
  authDomain: "login-4ad49.firebaseapp.com",
  projectId: "login-4ad49",
  storageBucket: "login-4ad49.appspot.com",
  messagingSenderId: "717123790477",
  appId: "1:717123790477:web:9854f2e5e57e7391fee4c4",
  measurementId: "G-PRHZF6EFWL"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);