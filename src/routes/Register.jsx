import React, { useState, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setRoute } = useContext(AppContext);
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                toast(`User ${email} registered correctly!`);
                setRoute("home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createUser();
    }

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-xl font-semibold text-sky-700'>
                Welcome to Register
            </h1>
            <p className='text-sm'>Please register to get access to the best app in the world!</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='text' value={password} onChange={e => setPassword(e.target.value)} />
                <button className='bg-sky-400 py-1 text-white rounded shadow'>Register</button>
            </form>
        </div>
    )
}

export default Register
