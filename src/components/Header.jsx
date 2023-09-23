import React, { useContext } from 'react';
import { PiFireSimpleBold } from 'react-icons/pi'
import { AppContext } from '../App';

const Header = () => {
    const { route, setRoute } = useContext(AppContext);
    return (
        <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
                <PiFireSimpleBold className='text-2xl text-pink-600'/>
                <span className='text-xl font-semibold text-pink-600'>FireShopping</span>
            </div>
            <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={() => setRoute("login")}>
                Login
            </button>
        </header>
    )
}

export default Header
