
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFCO_X1pomfF5a5NeOZSEl1aTyRTacB8",
  authDomain: "cloudcounter-ca8eb.firebaseapp.com",
  projectId: "cloudcounter-ca8eb",
  storageBucket: "cloudcounter-ca8eb.appspot.com",
  messagingSenderId: "231732779924",
  appId: "1:231732779924:web:7ff570a8f6fe8c43c44d81"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
