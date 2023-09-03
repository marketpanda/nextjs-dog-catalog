"use client"

import React, { useState } from 'react' 
import Image from 'next/image'
  

export default function ClientComponent({ 
    repeat={arrayResult} 
}) {
  const [dog, setDog] = useState('https://clipart-library.com/images_k/dog-silhouette-png/dog-silhouette-png-7.png')
  const [loading, setLoading] = useState(false)
  const [theBreed, setTheBreed] = useState('')

  const promise64 = ''

  function displayDog(breed) { 
    setLoading(true) 
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message)
         
        
        setTheBreed(breed)
        setLoading(false)        
      })
       
  }
  
  return (

    <>
      <h2 className="text-white text-2xl font-bold">{theBreed}</h2>
      <div className='border-2 w-full h-[400px] flex justify-center items-center'> 
        
        {
          
          (loading) ? (
            'Loading...' 
          ) : (
            <Image
              src={dog}
              width={600}
              height={600}
              className='transition-opacity opacity-0 duration-[1s] h-full w-auto'
              onLoadingComplete={(img) => img.classList.remove('opacity-0')}
              onLoad={(_) => setLoading(false)} 
               
            /> 
          )
        } 
      </div> 
      <div>a to z</div>
      <div> 
          {repeat.map((dog, index) =>(
            <> 
              <div key={index}> 
                  <button
                    onClick={() =>displayDog(dog.dogType)}
                    className="m-1 py-2 px-4 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
                        {dog.dogType}
                  </button>  

                    {dog.dogSubType != '' ? 
                        dog.dogSubType.map((subType) => (
                            <div className="m-1 py-2 px-4 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">{subType}</div>
                        )) 
                    : null} 
                  
              </div>
              
            </> 
            
          ))}  
        </div> 
    </>
   
  )
}
