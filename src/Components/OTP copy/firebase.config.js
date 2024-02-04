// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv6a8wUIjXP_svZreqtUajUWC9FW7FQhE",
  authDomain: "fitflow-otp.firebaseapp.com",
  projectId: "fitflow-otp",
  storageBucket: "fitflow-otp.appspot.com",
  messagingSenderId: "567134811605",
  appId: "1:567134811605:web:8cc0a4b1cec2ab2003b95c",
  measurementId: "G-ETHBTF1CC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)