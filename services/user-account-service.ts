import { auth, db } from "@/lib/firebase-service";
import { doc, setDoc } from "firebase/firestore";

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
