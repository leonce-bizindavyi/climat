import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
    const {data: session, status:status} = useSession()
  return (
    <div>
        <div className='nav-bar flex flex-row justify-between px-4 fixed top-0 bg-white z-50 h-14 w-full '>
            <Link href='/'> <h1 className='text-emerald-900 text-4xl sm:text-5xl font-bold'>Env.</h1> </Link>
            <div className='flex space-x-2 items-center'>
            {status != 'authenticated' && !session  ?
                <button onClick={(e)=>{e.preventDefault(); signIn('google')}} className='hover:text-black hover:bg-white text-lg sm:text-xl font-medium border-[2.5px] border-emerald-900 p-1
                text-white bg-emerald-900  duration-300'>
                    Sign in
                </button>
            :<button onClick={(e)=>{e.preventDefault(); signOut('google')}}>
                <Image src={session.user.image} alt='profile' width={20} height={20} className='w-12 h-12 rounded-full' />
            </button>
            }
                {/* <button className='hover:text-black hover:bg-white text-lg  sm:text-xl font-medium border-[2.5px] border-emerald-900 p-1
                text-white bg-emerald-900  duration-300'>
                    Sign up
                </button> */}
            </div>
        </div>
      
    </div>
  )
}
