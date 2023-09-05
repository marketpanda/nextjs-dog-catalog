import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'
import SignInButton from './components/SignInButton'
import RightMenu from './components/RightMenu'
   

const inter = Inter({ subsets: ['latin'], weight:'400' })

export const metadata = {
  title: 'Dogs Catalog',
  description: 'Different breeds of dogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={`${inter.className} border-2 rounded p-1 mt-1 w-[600px] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>
        <Providers>
          <h1 className='text-center text-white font-bold'><Link href="/">Dogs Catalog</Link></h1>
          <div className='flex justify-between'>
            <SignInButton />
            <RightMenu />

          </div>
          
          
            {children}
        </Providers>
        </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
