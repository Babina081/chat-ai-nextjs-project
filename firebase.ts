import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSjkKmtyDmDkIi5ealvlznBXj6oaXX8Vs",
  authDomain: "chat-ai-nextjs-project.firebaseapp.com",
  projectId: "chat-ai-nextjs-project",
  storageBucket: "chat-ai-nextjs-project.appspot.com",
  messagingSenderId: "505394491848",
  appId: "1:505394491848:web:eec1303cd3a0c629ef50fd",
  measurementId: "G-PQVJN1LDFB",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
