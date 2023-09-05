"use client"

import React, { useEffect, useState } from 'react' 
import Image from 'next/image'
import Link from 'next/link'
 
import { Modal } from './components/Modal'
import BasicModal from './components/BasicModal'
  

export default function ClientComponent({ 
    repeat={arrayResult} 
}) {
  const [dog, setDog] = useState('https://clipart-library.com/images_k/dog-silhouette-png/dog-silhouette-png-7.png')
  const [loading, setLoading] = useState(false)
  const [theBreed, setTheBreed] = useState('')
  const [curList, setCurList] = useState(repeat)
 
  
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

  function alphabet() {
    let stringAlphabet = []
    for (let i = 97; i <= 122; i++) {
      stringAlphabet.push(String.fromCharCode(i))
    }
     
    return stringAlphabet
  }

  const stringAlpha = alphabet()

  function filterBreeds(theChar, arr) {
     
    const newArr = arr.filter(dList => dList.dogType.charAt(0)  === theChar )
    setCurList(newArr) 
    console.log(newArr)
  } 
  
  return (

    <>
      <h2 className="text-white text-2xl font-bold">{theBreed}</h2>
      <BasicModal title='About Dogs Catalog'>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Jones Dollesin has created a captivating online dogs catalog, a virtual haven for dog enthusiasts. This website showcases an extensive collection of our furry friends, offering a delightful journey through various breeds, their unique characteristics, and heartwarming stories. From playful puppies to majestic seniors, John's dedication to curating this canine compendium shines through. Whether you're a seasoned dog owner or simply captivated by these loyal companions, John's website promises a wealth of information and adorable moments, celebrating the profound bond between humans and dogs. Explore John's digital dog haven and embark on a journey through the world of canine wonders.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Credits to https://dog.ceo/dog-api/ for providing a rich API
        </p> 
      </BasicModal>
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
              alt={theBreed}
               
            /> 
          )
        } 
      </div> 
      <div>{
        stringAlpha.map((letter) => (
          <>
            <button
            className='m-1 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => filterBreeds(letter, repeat)}>
            {letter}
            </button> 
          </> 
        )) 
      }
        <button
            className='m-1 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setCurList(repeat)}>
          all
        </button>
      </div>
      <div> 
          {curList.map((dog, index) =>(
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
