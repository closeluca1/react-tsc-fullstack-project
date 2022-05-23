import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'dotenv';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);