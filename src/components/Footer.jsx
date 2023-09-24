import React, { useContext } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs"
import { AppContext } from '../App';

const Footer = () => {
    const { setRoute } = useContext(AppContext);

    return (
        <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
            <div className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500' onClick={() => setRoute('home')}>
                <IoHomeSharp />
            </div>
            <div className='bg-sky-200 p-2 text-3xl rounded-full text-pink-500' onClick={() => setRoute('shopping')}>
                <BsFillCartFill />
            </div>
        </footer>
    )
}

export default Footer
