import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <footer className='bg-secondary h-[10vh] w-full flex items-center justify-center gap-2 text-white font-bold'>
        <FaRegCopyright />
        <p>Praveen R 2024</p>
    </footer>
  )
}

export default Footer