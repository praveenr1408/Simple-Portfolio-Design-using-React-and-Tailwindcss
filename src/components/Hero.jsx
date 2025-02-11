import React from 'react'
import HeroImage from '../assets/hero.jpg'
import {FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa';

function Hero() {
    return (
        <section className='flex gap-10 flex-col md:flex-row md:gap-0  items-center justify-center h-[90vh]'>
            <section className='w-full md:w-1/2 flex flex-col items-center justify-center gap-8'>
                <h1 className='text-4xl md:text-5xl font-bold' >Hi, Im <span className='text-[#FC745F]'>Praveen</span></h1>
                <p className='text-2xl'>I am a Designer</p>
                <section className='flex gap-10'>
                    <button>
                        <FaGithub className='text-[#FC745F] hover:text-black' size={40} />
                    </button>

                    <button>
                        <FaInstagram className='text-[#FC745F] hover:text-black' size={40} />
                    </button>

                    <button>
                        <FaLinkedin className='text-[#FC745F] hover:text-black' size={40} />
                    </button>

                </section>
            </section>
            <section className='w-1/2 flex flex-col items-center justify-center'>
                <img className='w-[100%] md:w-[60%]' src={HeroImage} />
            </section>
        </section>
    )
}

export default Hero