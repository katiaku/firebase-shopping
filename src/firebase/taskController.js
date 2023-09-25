import { db } from "./index";
import { collection, addDoc } from "firebase/firestore"; 

export const addNewTask = async task => {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Document written with ID: ", docRef.id);
}
