import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const doLogin = () => {
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

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-xl font-semibold text-sky-700'>
                Welcome to Login
            </h1>
            <p className='text-sm'>Press the button to login</p>
            <button onClick={doLogin} className='bg-sky-400 px-3 py-1 text-white rounded shadow'>Login</button>
        </div>
    )
}

export default Login
