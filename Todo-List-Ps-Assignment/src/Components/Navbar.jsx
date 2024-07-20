import React from 'react';
import '../index.css';
import img from '../assets/check-list.74bd450f.png';

function Navbar() {
    return (
        <>
            <nav className='flex items-center py-7 px-20' style={{ backgroundColor: '#4B0082'}}>
                <div className='h-16 w-16 mr-5'>
                    <img className='w-full h-full' src={img} alt="image logo" />
                </div>
                <h1 className='text-3xl text-white m-0 flex-grow font-bold'>My Daily Task</h1>
            </nav>
        </>
    )
}

export default Navbar
