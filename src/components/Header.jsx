import React, { useContext } from 'react';
import { PiFireSimpleBold } from 'react-icons/pi'
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {
    const { setRoute, user, setUser } = useContext(AppContext);
    const doLogout = () => {
        signOut(auth)
            .then(() => {
                setRoute("login");
                setUser(null);
                toast('The user has logged out');
            })
            .catch((e) =>console.error(e));
    }

    return (
        <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
                <PiFireSimpleBold className='text-2xl text-pink-600'/>
                <span className='text-xl font-semibold text-pink-600'>FireShopping</span>
            </div>
            <div className='flex gap-2'>
                {user ?
                    <>
                        <button onClick={doLogout} className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'>
                            Logout
                        </button>
                    </>
                : 
                    <>
                        <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={() => setRoute("login")}>
                            Login
                        </button>
                        <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={() => setRoute("register")}>
                            Register
                        </button>
                    </>
                }
            </div>
        </header>
    )
}

export default Header
