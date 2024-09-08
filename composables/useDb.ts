
import { getFirestore } from "firebase/firestore";

export function useDb() {
    const db = getFirestore(); 

    return { db};
  }

 
