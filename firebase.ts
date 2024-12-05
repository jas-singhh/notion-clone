// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmdq-avS2OLSyculKRvjX1PMdx4QsHCU",
  authDomain: "notion-clone-7a618.firebaseapp.com",
  projectId: "notion-clone-7a618",
  storageBucket: "notion-clone-7a618.firebasestorage.app",
  messagingSenderId: "830379371183",
  appId: "1:830379371183:web:f53c9ab8bcd229777e825a",
  measurementId: "G-GHWSX5KYV8",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
