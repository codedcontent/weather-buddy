import { auth } from "@/lib/firebase-service";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const signup = async (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password);
};

const login = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

const onAuthChanged = (callback: () => void) => {
  onAuthStateChanged(auth, callback);
};

export { signup, login, onAuthChanged };
