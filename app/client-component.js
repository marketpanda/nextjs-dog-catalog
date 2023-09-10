"use client"

import React, { useEffect, useState } from 'react' 
import Image from 'next/image'
import Link from 'next/link'
  
import BasicModal from './components/BasicModal'
import Comments from './components/Comments' 
import { useRouter } from 'next/navigation'

import { FacebookShareButton, FacebookIcon } from 'next-share'
 

export default function ClientComponent({ 
    repeat,
    comments 
}) {
  
  const [dog, setDog] = useState('https://clipart-library.com/images_k/dog-silhouette-png/dog-silhouette-png-7.png')
  const [loading, setLoading] = useState(false)
  const [theBreed, setTheBreed] = useState('')
  const [curList, setCurList] = useState(repeat)
  const [subBreedImage, setSubBreedImage] = useState()

  const [displaySubBreeds, setdisplaySubBreeds] = useState()

  const router = useRouter()

  

  const refreshData = (c) => {  
    router.refresh() 
     
  }
   
   
  
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

  useEffect(() => { 
    if (theBreed != '') {
      fetch(`https://dog.ceo/api/breed/${theBreed}/list`)
    .then((res) => res.json())
    .then((data) => {
      setSubBreedImage(data.message)
    }) 

    }
    
  }, [theBreed])

  useEffect(() => {
    if (subBreedImage) {
      console.log(subBreedImage)
    }
  }, [subBreedImage])

  //displays a to z
  function alphabet() {
    let stringAlphabet = []
    for (let i = 97; i <= 122; i++) {
      stringAlphabet.push(String.fromCharCode(i))
    }
     
    return stringAlphabet
  }

  function liked() {
    console.log('liked')
  }

  const stringAlpha = alphabet()

  function filterBreeds(theChar, arr) {
     
    const newArr = arr.filter(dList => dList.dogType.charAt(0)  === theChar )
    setCurList(newArr) 
    
  } 

  function handleSubBreedImgs(dType, dSubType) {
    console.log('breed: ', dType, '\nbreed subtype: ', dSubType)
    
    const images = `https://dog.ceo/api/breed/${dType}/${dSubType}/images`
    
    console.log(images)
  
    fetch(images)
      .then((res) => res.json())
      .then((data) => (
        setdisplaySubBreeds(data.message)
      ))
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
      <div className='border-2 w-full h-[400px] flex justify-center items-center flex-col'> 
        
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

      <div className='flex justify-end ml-auto'>
          <button onClick={liked} className="m-2 bg-red-500 hover:bg-red-700 text-sm text-white py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            &nbsp;Like
          </button>
         
          <FacebookShareButton><FacebookIcon size={36} borderRadius={8} /></FacebookShareButton>
        </div> 
 
      <div>
       
        <Comments refreshData={refreshData} comments={comments} />
      </div>
      <div>
          
        <div className="lg:columns-3 columns-2 gap-3 mx-auto space-y-3 pb-28">
        {displaySubBreeds && displaySubBreeds.map((bre, i) => (
          <div key={i} className="break-inside-avoid ">
            <a href={bre} target="_blank">
              <Image  
                className="w-full rounded-lg"   
                src={bre}
                width={150}
                height={150}
                alt={bre}
              />
            </a>
          </div>
        ))}

        </div> 
      </div>
      <div>
        current: {theBreed} <br/> 
        {  
          
          Array.isArray(subBreedImage) && subBreedImage.length > 0 &&
          subBreedImage.map((img, i) => (
              
            <div key={i}> 
              <Link href={`https://dog.ceo/api/breed/${theBreed}/${img}/images`}>
              https://dog.ceo/api/breed/{theBreed}/{img}/images</Link>
            </div>
          )) 
        }
      </div>
      <div>{
        stringAlpha.map((letter, i) => (
          <>
            <button key={i}
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
      <div className="flex flex-wrap"> 
          {curList.map((dog, index) =>(
            <> 
              <div key={index} className="bg-lime-200 bg-opacity-50
              inline-flex items-center flex-wrap"> 


                  <button
                    onClick={() =>displayDog(dog.dogType)}
                    className="m-1 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {dog.dogType}
                  </button>  

                    {dog.dogSubType != '' ? 
                        dog.dogSubType.map((subType, i) => (
                            <div key={i}> 
                              <button
                                className="m-1 px-3 py-2 text-xs font-medium text-center text-white bg-rose-500 rounded hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleSubBreedImgs(dog.dogType, subType)}
                              > 
                              {subType}{' '}{ dog.dogType}
                            </button>
                            </div>
                        )) 
                    : null}  
                  
              </div> 
            </>  
          ))}  
        </div> 
    </>
   
  )
}
