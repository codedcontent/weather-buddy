import { db } from "@/lib/firebase-service";
import {
  doc,
  setDoc,
  getDoc,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

interface NewUserDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export async function createNewUserAccount(
  userDetails: NewUserDetails,
  uid: string
) {
  await setDoc(doc(db, "users", uid), { ...userDetails });
}

export async function getUserAccountDetails(
  uid: string
): Promise<{} | undefined> {
  const docRef = doc(db, `users/${uid}`);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return undefined;
  }
}
