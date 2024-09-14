// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAepXapeWH7V0bGyEDZuS-k1oTRMH0KxyI",
  authDomain: "portfolio-4db36.firebaseapp.com",
  projectId: "portfolio-4db36",
  storageBucket: "portfolio-4db36.appspot.com",
  messagingSenderId: "488943559916",
  appId: "1:488943559916:web:d3c23c189cfbf24c54b1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 
