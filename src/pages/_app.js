import Nav from '@/Components/navBar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <div className='relative bg-white pt-14  overflow-hidden'>
        <Nav />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
