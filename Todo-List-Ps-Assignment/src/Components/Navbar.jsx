import React from 'react';
import '../index.css';
import img from '../assets/check-list.74bd450f.png';

function Navbar() {
    return (
        <>
            <nav className='flex items-center py-3 px-12 sm:py-7 sm:px-20' style={{ backgroundColor: '#4B0082'}}>
                <div className='h-10 w-10 md:h-16 md:w-16 mr-5'>
                    <img className='w-full h-full' src={img} alt="image logo" />
                </div>
                <h1 className='text-2xl md:text-4xl text-center sm:text-left text-white m-0 flex-grow font-bold'>My Daily Task</h1>
            </nav>
        </>
    )
}

export default Navbar
