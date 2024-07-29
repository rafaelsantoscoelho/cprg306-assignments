// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration

// I've encountered an unexpected issue.
// The code functions correctly only when environment variables
// are hardcoded. Using the standard approach from class results in an
// "auth-invalid-api-key" error. I'll maintain the intended code
// structure for now, but if the problem persists, please replace
// the environment variables with the following values for testing
// purposes
// I'll just paste the environment variables below (I know that I'm not supposed to do this in real-life production code)

// NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyDbBCqZRa0uAO_DS-vHMEyRkkg_a-os4QQ"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="rscoelho-webdev2-2024.firebaseapp.com"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID="rscoelho-webdev2-2024"
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="rscoelho-webdev2-2024.appspot.com"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="1049154292715"
// NEXT_PUBLIC_FIREBASE_APP_ID="1:1049154292715:web:82ccf52b11b6d45c86e7ae"

const firebaseConfig = {
  apiKey: "AIzaSyDbBCqZRa0uAO_DS-vHMEyRkkg_a-os4QQ",
  authDomain: "rscoelho-webdev2-2024.firebaseapp.com",
  projectId: "rscoelho-webdev2-2024",
  storageBucket: "rscoelho-webdev2-2024.appspot.com",
  messagingSenderId: "1049154292715",
  appId: "1:1049154292715:web:82ccf52b11b6d45c86e7ae",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
