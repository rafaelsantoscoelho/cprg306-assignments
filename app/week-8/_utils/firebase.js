// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration

// I've encountered an unexpected issue.
// The code functions correctly only when environment variables
// are hardcoded. Using the standard approach from class results in an
// "auth-invalid-api-key" error. I'll maintain the intended code
// structure for now, but if the problem persists, please replace
// the environment variables with the following values for testing
// purposes

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);