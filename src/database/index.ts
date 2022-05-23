import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOsTUS2PJtaiQx0ovJWPHqybbEl2oMEdU",
  projectId: "appaboadodia",
  appId: "1:798994675236:web:9af965052fafc17cd38ab1"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);