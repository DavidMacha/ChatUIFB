// Code by Utsav Patel
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
REACT_APP_API_KEY=your-api-key,
REACT_APP_AUTH_DOMAIN=your-auth-domain,
REACT_APP_PROJECT_ID=your-project-id,
REACT_APP_STORAGE_BUCKET=your-storage-bucket,
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id,
REACT_APP_APP_ID=your-app-id
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
