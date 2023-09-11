import Head from 'next/head' 
import ClientComponent from './client-component'
// import { headers } from 'next/headers';
 
// export const revalidate = 0
 
export default async function Home() {
  //use to invoke dynamic page
  // const headersList = headers()
 
  async function getData() {
    const res = await fetch('hhttps://dogs-catalog.netlify.app/api/comments', {
      method: 'GET',
      cache: 'no-store'
    })
    // return await ( await res.GET()).json()
    return await res.json()
  }  

  const pullComments = await getData()
  console.log('========================\n', pullComments)
 
  
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
 
   
    
    
    


