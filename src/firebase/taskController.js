import { db } from "./index";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

export const addNewTask = async task => {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Document written with ID: ", docRef.id);
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    // console.log(querySnapshot);

    // querySnapshot.forEach(doc => {
    //     console.log(doc.id, ' => ', doc.data())
    // })

    const tasks = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    return tasks;
}
