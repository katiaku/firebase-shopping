import { db } from "./index";
import { doc, collection, addDoc, getDocs, setDoc } from "firebase/firestore"; 

export const addNewTask = async task => {
    const docRef = await addDoc(collection(db, "tasks"), task);
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

export const updateTask = async (task) => {
    await setDoc(doc(db, "tasks", task.id), {
        title: task.title,
        description: task.description
    })
}
