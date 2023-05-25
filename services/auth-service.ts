import { auth } from "@/lib/firebase-service";

import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const signup = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user.user;
};

const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const onAuthChanged = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, callback);
};

const logoutUser = async () => {
  await signOut(auth);
};

export { signup, login, onAuthChanged, logoutUser };
