import { RefSymbol } from "@vue/reactivity";
import type { User } from "firebase/auth";
import {
  getAuth,signOut
} from "firebase/auth";
export function useAuth() {
  const auth = getAuth()
  const signout=signOut(auth)
  const user = ref<User | null>(auth.currentUser);
  auth.onIdTokenChanged((authUser) => (user.value = authUser));
  
  return { auth, user, signout};
}