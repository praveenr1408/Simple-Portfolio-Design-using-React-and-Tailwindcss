import React, { useState } from 'react'
import './Header.css'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    const menus = ['Home', 'About', 'Project', 'Contact'];
    const [toggle, setToggle] = useState(false)
    return (
        <header className='flex justify-between bg-primary p-6'>
            <a className='font-bold text-lg text-white' href="#" >Praveen R</a>

            <nav className='hidden md:block'>
                <ul className='flex text-white text-lg'>
                    {menus.map((menu, index) => (
                        <li className='px-3' key={index}>
                            <a href="#">{menu}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* nav bar For mobile view */}
            {toggle && <nav className='block md:hidden '>
                <ul className='flex flex-col align-middle justify-center text-black text-lg bg-gray-200 fixed top-19 left-0 w-full h-1/4'>
                    {menus.map((menu, index) => (
                        <li className='text-center py-1' key={index}>
                            <a href="#">{menu}</a>
                        </li>
                    ))}     
                </ul>
            </nav>}

            <button onClick={()=>setToggle(!toggle)} className='block md:hidden'>
                <Bars3Icon className='text-white h-7' />
            </button>
        </header>
    )
}

export default Header