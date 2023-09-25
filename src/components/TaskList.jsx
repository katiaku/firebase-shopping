import React, { useState, useEffect } from 'react';
import { addNewTask, getTasks } from '../firebase/taskController';

const task = {
    title: "This is the title",
    description: "This is the description"
}

const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description: "" });
    const [tasks, setTasks] = useState([]);

    const createNewTask = async () => {
        await addNewTask(task);
        setTask({ title: "", description: "" });
        initializeTasks();
    }

    const initializeTasks = () => {
        getTasks()
        .then(t => setTasks([...t])
        .catch(e => console.error(e)));
    }

    useEffect(() => {
        initializeTasks();
    }, []);

    return (
        <div>
            <h1 className='text-sky-700 font-semibold text-xl'>Tasklist</h1>
            <div className='flex flex-col gap-4'>
                <h2>Enter new task</h2>
                <input
                    type="text"
                    value={task.title}
                    placeholder="Title"
                    className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full' 
                    onChange={e => setTask({ ...task, title: e.target.value })}
                />
                <textarea
                    type="text"
                    rows={3}
                    value={task.description}
                    placeholder="Description"
                    className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full' 
                    onChange={e => setTask({ ...task, description: e.target.value })}
                />
                <button className='bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold' onClick={createNewTask}>Add</button>
            </div>
            <button onClick={getTasks}>Get Tasks</button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'
                    >
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-sky-300'></div>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList
