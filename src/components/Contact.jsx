import React from 'react'

function Contact() {
  return (
    <section id='contact-section' className='bg-[#FC745F] h-auto w-full flex flex-col  gap-12 items-center justify-center py-10'>
        {/* heading and description */}
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-center font-bold text-4xl'>Contact</h1>
            <p className='text-center text-white text-[20px] w-[80%] lg:w-[100%]'>If you want to discuss more in details, please contact me</p>
        </div>

        {/* email and phone section */}
        <div className='flex flex-col items-center'>
            <p className='text-[20px] text-white'><span className='font-bold'>Email : </span>praveengabap@gmail.com</p>
            <p className='text-[20px] text-white'><span  className='font-bold'>Phone : </span>9876543210</p>
        </div>

    </section>
  )
}

export default Contact