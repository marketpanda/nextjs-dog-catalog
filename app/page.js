 
import Head from 'next/head' 
 
 
import ClientComponent from './client-component'
import prisma from './lib/prisma' 


export default async function Home() {

  const comments2 = await prisma.comments.findMany()  
  
  
   
  console.log(typeof(comments2))
  const getDogBreeds = await fetch(`https://dog.ceo/api/breeds/list/all`)
  const res =  await getDogBreeds.json()
  const breeds = res.message
  
  const arrayResult = Object.keys(breeds).map((key) => ({
    dogType: key,
    dogSubType: breeds[key]
  }))  
  

  return (
    <>
      <Head>
        <title>Dogs Catalog</title> 
        <meta name="description" content="Dogs Catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> 
        <ClientComponent repeat={arrayResult} parsedComments={comments2} /> 
      </main>
    </>
  )
}

 
   
    
    
    

