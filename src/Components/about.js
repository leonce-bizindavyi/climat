import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div >
        <h1 className='text-2xl text-emerald-950 font-semibold italic mx-auto w-max '>~ Our mission ~</h1>
        <div className='flex flex-row space-x-4 mt-6 '>
            <div className='post-container w-full flex flex-col space-y-8 '>
            
             <div className=' flex flex-col space-y-4 sm:flex-row sm:space-y-0  sm:space-x-7 mx-auto'>
                <div className='mission1 p-4 rounded-md w-[210px] shadow-lg shadow-gray-900 bg-gray-400 bg-opacity-70 hover:-translate-y-4 duration-300'>
                                
                                <p className='text-lg text-slate-950 font-semibold '>be distracted by the readable content 
                                    of a page when looking at its layout. 
                                </p> 
                </div>
                <div className='mission1 p-4 rounded-md w-[210px] shadow-lg shadow-gray-900 bg-gray-400 bg-opacity-70 hover:-translate-y-4 duration-300'>
                                
                                <p className='text-lg text-slate-950 font-semibold '>be distracted by the readable content 
                                    of a page when looking at its layout. 
                                </p> 
                </div>
                <div className='mission1 p-4 rounded-md w-[210px] shadow-lg shadow-gray-900 bg-gray-400 bg-opacity-70 hover:-translate-y-4 duration-300'>
                                
                                <p className='text-lg text-slate-950 font-semibold '>be distracted by the readable content 
                                    of a page when looking at its layout. 
                                </p> 
                </div>
            </div> 
            </div>
            
    </div>
    </div>
  )
}
