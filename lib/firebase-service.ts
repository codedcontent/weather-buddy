import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpGjvdPA9DpwE0GbPxcpUR9PnmvHASmdQ",
  authDomain: "weather-buddy-9e34b.firebaseapp.com",
  projectId: "weather-buddy-9e34b",
  storageBucket: "weather-buddy-9e34b.appspot.com",
  messagingSenderId: "172445541985",
  appId: "1:172445541985:web:5608d54a8cb09a8606ac20",
};

// Check if an app already exist
// if (!firebase.getApps().length) {
//   firebase.initializeApp(firebaseConfig);
// }

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
