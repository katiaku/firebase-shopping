import React, {useState} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log('token', token);
                console.log('user', user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const doLoginEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                toast('Signed in successfully!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-xl font-semibold text-sky-700'>
                Welcome to Login
            </h1>
            <div className='flex flex-col gap-2'>
                <form onSubmit={doLoginEmail} className='flex flex-col gap-2'>
                    <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input className='border border-gray-500 rounded py-1 px-2 outline-none' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='bg-sky-400 py-1 text-white rounded shadow'>Login</button>
                </form>
                <button onClick={doLoginGoogle} className='bg-sky-400 px-3 py-1 text-white rounded shadow'>Login with Google</button>
            </div>
        </div>
    )
}

export default Login
