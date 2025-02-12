import React from 'react'

function Card(props) {
  return (
    <div id='card' className='bg-[#385A64] w-[280px] h-[300px] flex flex-col justify-evenly items-center rounded-sm '>
        {/* image section */}
        <div className='w-[80%] h-[150px]'>
          <img src={props.image} alt="" className='w-[100%] h-[100%] rounded-sm object-cover' />
        </div>

        {/* project title section*/}
        <div className='w-[80%]'>
          <h1 className='text-center text-2xl font-bold text-white'>{props.title}</h1>
        </div>

        {/* visit demo button section*/}
        <div className='w-[80%] shadow-black'>
          <button className='bg-[#FC745F] w-full h-10 rounded-md hover:bg-white hover:cursor-pointer duration-1000'>Visit</button>
        </div>

    </div>
  )
}

export default Card