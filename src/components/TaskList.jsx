import React, { useState } from 'react';

const task = {
    title: "This is the title",
    description: "This is the description"
}

const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description: "" });

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
                <button className='bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold'>Add</button>
            </div>
        </div>
    )
}

export default TaskList