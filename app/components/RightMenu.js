'use client'

 
import { IdentificationIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
  

export default function RightMenu() {
    
     

    return (
        <>
            <Link href="/?mode=show"> 
               
                    <IdentificationIcon className="w-6 h-6"/>
                 
            </Link>
            
        </>
        
    )
}
 