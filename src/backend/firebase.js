import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  query,
  collection,
  onSnapshot,
  orderBy,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNQp5cIeN4nNNtAieSsIsXJNqi0ylzEY",
  authDomain: "project-joined.firebaseapp.com",
  projectId: "project-joined",
  storageBucket: "project-joined.appspot.com",
  messagingSenderId: "27955408548",
  appId: "1:27955408548:web:658a57d5087df6add9c031",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {
  db,
  serverTimestamp,
  query,
  collection,
  onSnapshot,
  orderBy,
  addDoc,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
};
