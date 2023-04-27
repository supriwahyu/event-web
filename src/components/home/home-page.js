import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({data}) {
  return (
    <>
    <div className='home_body'>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
          <a className= 'card'>
            <div className='image'>
            <Image width={500} height={300} src={ev.image}/>
            </div>
            <div className='content'>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            </div>
          </a>
          </Link>
        ))} 
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json');
  // console.log(events_categories);
  return {
    props:{
      data: events_categories
    },
  };
}
