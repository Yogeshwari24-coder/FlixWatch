import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginyocart.firebaseapp.com",
  projectId: "loginyocart",
  storageBucket: "loginyocart.firebasestorage.app",
  messagingSenderId: "938293560606",
  appId: "1:938293560606:web:bd582d142e2d76476cf50f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}