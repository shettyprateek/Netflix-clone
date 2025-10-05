// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFcwkQDFPb9Yx90Ds_-68ST9QHMfeh21w",
  authDomain: "netflixgpt-de8f1.firebaseapp.com",
  projectId: "netflixgpt-de8f1",
  storageBucket: "netflixgpt-de8f1.firebasestorage.app",
  messagingSenderId: "653565772918",
  appId: "1:653565772918:web:6d784a4f21981bca358b57",
  measurementId: "G-R01ZZ5EZLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
