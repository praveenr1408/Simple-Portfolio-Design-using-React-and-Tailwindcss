import React from 'react'
import HeroImage from '../assets/about-me.png'

function AboutMe() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center bg-[#FC745F] h-[100vh] md:gap-0 gap-6'>

        <section className='flex justify-center w-1/2'>
            <img className='w-[80%] md:w-[60%] rounded-2xl' src={HeroImage} />
        </section>

        <section className='flex flex-col gap-8 justify-center w-1/2'>
            <h1 className='text-4xl md:text-5xl font-bold text-center md:text-start'>About Me</h1>
            <p className='md:w-[80%] text-white text-center md:text-[20px] md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates veniam accusamus fugit beatae adipisci quas eum et porro recusandae, necessitatibus maiores voluptatibus? Voluptatibus adipisci nobis consequatur et magnam maiores.</p>
        </section>

    </section>
  )
}

export default AboutMe