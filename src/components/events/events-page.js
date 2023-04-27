import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllEvents = ({data}) => {
    return (
        <div className='home_body'>
        <h1> events</h1>
        <div>
          {data.map(ev => (
            <Link  key={ev.id}  href={`/events/${ev.id}`} legacyBehavior>
            <a className= 'card'>
            <div className='image'>
              <Image width={500} height={300} src={ev.image} />
            </div>
            <div className='content'>
              <h2>{ev.title}</h2>
            </div>
            </a>
            </Link>
          ))}
        </div>
        </div>
    );
};

export default AllEvents;