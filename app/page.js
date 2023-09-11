import Head from 'next/head' 
import ClientComponent from './client-component'
 
export const dynamic = 'force-dynamic'
 
export default async function Home() {

  async function getData() {
    let res
    try {
      res = await fetch('https://dogs-catalog.netlify.app/api/comments', {
        method: 'GET',
        cache: 'no-store'
      }) 
       
    } catch (error) {
      console.log(error)
    }

    if (!res.ok) {
      res = await fetch('http://localhost:3000/api/comments', {
        method: 'GET',
        cache: 'no-store'
      }) 

    }
    
    // return await ( await res.GET()).json()
    return await res.json()
  }  

  const pullComments = await getData()
  console.log(
    '========================\n',
    '========================\n',
    pullComments)
 
  
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
        <ClientComponent repeat={arrayResult}
          comments={pullComments}
        /> 
      </main>
    </>
  )
}
 
   
    
    
    


