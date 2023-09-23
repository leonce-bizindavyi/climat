import React from 'react'
import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()
    const readPost = (post)=>{
        router.push('/posts')
    }
  return (
    <div >
        <h1 className='text-2xl text-emerald-950 font-semibold italic mx-auto w-max '>~ Posts ~</h1>
        <div className='flex flex-col space-y-4 md:flex-row  md:space-x-4 mt-6  bg-gray-100 p-4 '>
            <div className='post-container w-full flex flex-col space-y-8 '>
            <div className='post-range1 flex flex-row space-x-7 sm:mx-auto'>
                <div className='post1 space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span onClick={()=>readPost(1)}>Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                    </div>
                </div>
                <div className='post1 space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span >Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>

                            </button>
                    </div>
                </div>
                <div className='post1 hidden md:block space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span >Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>

                            </button>
                    </div>
                </div>
            </div>
            <div className='post-range2 flex flex-row space-x-7 sm:mx-auto'>
                <div className='post1 space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span >Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>

                            </button>
                    </div>
                </div>
                <div className='post1 space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span >Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>

                            </button>
                    </div>
                </div>
                <div className='post1 hidden md:block space-y-2 w-[210px] bg-white p-3 rounded shadow-md '>
                    {/* <div className=' w-full h-[150px] rounded'>
                        <Image 
                            src="/images/env5.jpg"
                            alt='post1'
                            width={150}
                            height={50}
                            className='w-full h-full object-cover rounded'
                        />
                    </div> */}
                    <div className=' space-y-2 '>
                            <div className='profile-post flex flex-row space-x-1'>
                                <div className='w-10 h-10 rounded-full bg-gray-500'></div>
                                <div className='flex flex-col'>
                                    <span className='text-slate-700 font-semibold'>Brave</span>
                                    <span className='text-slate-600 text-xs'>20th Dec 2023</span>
                                </div>
                            </div>
                            <h1 className='text-lg text-slate-900 font-bold'>Where does it come from?</h1>
                            <p className='text-sm text-slate-700 line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button className='p-2 text-md text-white bg-emerald-950 hover:bg-emerald-900 duration-300 rounded-full font-semiibold flex flex-row justify-center items-center space-x-1'>
                                <span >Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 duration-300 hover:translate-x-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>

                            </button>
                    </div>
                </div>
            </div>
            
                </div>
            <div>
                <button className='text-lg px-1 text-white bg-emerald-950 hover:bg-emerald-900 duration-300 hover:bg-emerald-900 duration-300 flex flex-row space-x-2 rounded items-center font-semibold'>
                    <span>View All Post</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
    </div>
    </div>
  )
}
