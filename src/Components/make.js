import React from 'react'

export default function Make() {
  return (
    <div className='bg-emerald-950 min-h-[10rem] rounded w-full p-8 space-y-2'>
        <h1 className='text-5xl text-white  font-make'>Make your Post?</h1>
        <button className=' bg-white p-2 rounded-full text-lg font-bold text-slate-600 hover:text-white hover:bg-emerald-800 duration-300 hover:translate-x-5'>Get started</button>
        <div className='pt-4 ' >
        <h1 className='text-2xl bg-emerald-800 text-white font-semibold italic mx-auto px-2 w-max '>~ Who we are ~</h1>
        <div className='flex flex-row space-x-4 mt-6 '>
            <div className='post-container w-full rounded-sm flex flex-col space-y-8 '>
            <div className='w-[80%] md:w-[60%] mx-auto bg-emerald-800 p-3 '>
                <p className='text-white text-lg font-semibold'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                </p>
            </div>
            
            </div>
    </div>
    </div>
    </div>
  )
}
