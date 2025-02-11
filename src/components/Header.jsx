import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    const menus = ['Home', 'About', 'Project', 'Contact'];
    const [toggle, setToggle] = useState(false)
    return (
        <header className='flex items-center justify-between bg-primary p-6 h-[10vh]' >
            <a className='font-bold text-lg text-white' href="#" >Praveen R</a>

            <nav className='hidden md:block'>
                <ul className='flex text-white text-lg'>
                    {menus.map((menu, index) => (
                        <li className='px-3 hover:text-black' key={index}>
                            <a href="#" >{menu}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* nav bar For mobile view */}
            {toggle && <nav className='block md:hidden '>
                <ul className='flex flex-col items-center justify-center text-white text-lg bg-secondary fixed top-[10vh] left-0 w-full h-1/4'>
                    {menus.map((menu, index) => (
                        <li className='py-1' key={index}>
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