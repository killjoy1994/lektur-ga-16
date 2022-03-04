import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmAVcxUHXvV3mAhh2kt1CD1EGytMXKdI",
  authDomain: "lektur-app.firebaseapp.com",
  projectId: "lektur-app",
  storageBucket: "lektur-app.appspot.com",
  messagingSenderId: "145564730126",
  appId: "1:145564730126:web:b64bb471ba7640c92e4d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);