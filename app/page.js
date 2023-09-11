import Head from 'next/head' 
import ClientComponent from './client-component'
 

export const dynamic = 'force-dynamic'
export default async function Home() {

  async function getData() {
    let res
    try {
      res = await fetch('http://localhost:3000/api/comments', {
        method: 'GET',
        cache: 'no-store'
      }) 
       
    } catch (error) {
      console.log(error)
    } 
    
    return await res.json()
  }  

  // const pullComments = await getData()
  const pullComments = 
  
  [
    {
      id: 1,
      createdAt: '2023-09-08T05:49:24.618Z',
      name: 'Jsohn',
      text: 'First comment'
    },
    {
      id: 26,
      createdAt: '2023-09-09T05:38:00.257Z',
      name: 'Elon Musk',
      text: 'i am buying this site'
    },
    {
      id: 27,
      createdAt: '2023-09-09T05:40:50.140Z',
      name: 'BIll Gate',
      text: 'VCs are coming in!'
    },
    {
      id: 28,
      createdAt: '2023-09-09T05:50:54.243Z',
      name: 'Jeff Bezzos',
      text: 'welcome to the aw aw world!'
    },
    {
      id: 29,
      createdAt: '2023-09-09T06:03:49.530Z',
      name: 'Jones',
      text: 'working now?'
    },
    {
      id: 30,
      createdAt: '2023-09-09T06:06:05.424Z',
      name: 'Mark Z',
      text: 'i am buying this technology'
    },
    {
      id: 31,
      createdAt: '2023-09-09T06:34:26.825Z',
      name: 'Jones',
      text: 'dictionary of dogs'
    },
    {
      id: 54,
      createdAt: '2023-09-10T02:11:48.055Z',
      name: 'Jones',
      text: 'testing for fast update'
    },
    {
      id: 55,
      createdAt: '2023-09-10T02:15:55.617Z',
      name: 'Jones',
      text: 'September is here'
    },
    {
      id: 56,
      createdAt: '2023-09-10T02:58:46.506Z',
      name: 'Jones',
      text: 'testing deploys'
    },
    {
      id: 57,
      createdAt: '2023-09-10T02:59:34.621Z',
      name: 'Jones',
      text: 'testing '
    },
    {
      id: 58,
      createdAt: '2023-09-10T03:10:28.250Z',
      name: 'Jones',
      text: 'testing for live updates'
    },
    {
      id: 59,
      createdAt: '2023-09-10T04:16:58.242Z',
      name: 'Jones',
      text: 'does it work?'
    },
    {
      id: 60,
      createdAt: '2023-09-10T05:00:41.612Z',
      name: 'Jones',
      text: "hope it's working now"
    },
    {
      id: 61,
      createdAt: '2023-09-10T05:04:26.159Z',
      name: 'Jones',
      text: 'hello world'
    },
    {
      id: 62,
      createdAt: '2023-09-10T05:08:03.591Z',
      name: 'Jones',
      text: 'testing comments'
    },
    {
      id: 63,
      createdAt: '2023-09-10T05:28:25.577Z',
      name: 'Jones',
      text: 'syntax error update'
    },
    {
      id: 64,
      createdAt: '2023-09-10T05:29:13.211Z',
      name: 'Jones',
      text: 'Working here?'
    },
    {
      id: 65,
      createdAt: '2023-09-10T05:51:52.047Z',
      name: 'Jones',
      text: 'live update?'
    } 
  ]
  
  





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
 
   
    
    
    


