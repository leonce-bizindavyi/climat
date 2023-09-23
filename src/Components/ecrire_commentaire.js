import React from 'react'
import { useEffect,useRef } from 'react';
export default function Commentaire_post() {
const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div className='flex'>
        <input type="text" ref={inputRef} id="commentaire"  className="bg-gray-100 border-2 border-gray-400 text-gray-900 text-md rounded-full focus:outline-none w-[13rem]  sm:w-[20rem] p-2.5"/>
          <button className='bg-emerald-800 hover:bg-emerald-900 w-[2.5rem] h-[2.5rem] mt-1 sm:mt-0 sm:w-[3rem] sm:h-[3rem] rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-[0.01rem] text-white ml-[0.6rem] w-6 h-6 sm:w-8 sm:h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
    </div>
  )
}
