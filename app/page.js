import Head from 'next/head' 
import ClientComponent from './client-component'
 

export default async function Home() {

  async function getData() {
    const res = await import('./api/comments/route')
    return await ( await res.GET()).json()
  }  

  const pullComments = await getData()
 
  
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
        <ClientComponent repeat={arrayResult} comments={pullComments}  /> 
      </main>
    </>
  )
}
 
   
    
    
    


