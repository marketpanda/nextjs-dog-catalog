"use client"


 
import { useRouter } from "next/navigation"


export default async function page({ params }) {
     
    const router = useRouter()
 
     
  return (
    <>
        <button 
         onClick={() => router.back()}
         className="text-white">Back</button>
         
    </>
    
  )
}
