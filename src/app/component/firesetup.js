// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7fbul6XZfXDjMUK5WkLFtRHkXjWNig38",
  authDomain: "vapedrop67.firebaseapp.com",
  projectId: "vapedrop67",
  storageBucket: "vapedrop67.appspot.com",
  messagingSenderId: "100286605307",
  appId: "1:100286605307:web:dfb2fd09d18b831c344d5e",
  measurementId: "G-LY1LWY90XF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db};
