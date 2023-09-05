"use client"


import Image from "next/image"
import { useRouter } from "next/navigation"


export default async function page({ params }) {
    // const dogBreed = params.dog
     const router = useRouter()

    // const pullImage = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    // const res = await pullImage.json()
    // const generateBreedImage = res.message

    // const getSubBreed =  async(breed) => {
    //     //https://dog.ceo/api/breed/african/list
    //     const subBreed = await fetch(`https://dog.ceo/api/breed/${breed}/list`)
    //     const res = await subBreed.json()
    //     const siblings = res.message 
    //     return siblings
    // }

    // const SB = getSubBreed(dogBreed)
    // console.log('subBreeds ', SB)
     
  return (
    <>
        {/* <h2 className="text-white text-2xl font-bold">{params.dog}</h2> */}
        <button 
         onClick={() => router.back()}
         className="text-white">Back</button>
        {/* <div>{SB}</div>
        <div>{generateBreedImage}</div> */}
        {/* <Image 
            src={generateBreedImage} 
            width={600}
            height={600} 
        />  */}
    </>
    
  )
}
