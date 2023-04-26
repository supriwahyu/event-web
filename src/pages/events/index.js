import Image from 'next/image'
import Link from 'next/link';

const eventsPage = ({data}) => {
    return (
        <div>
        <h1> events</h1>
        <div>
          {data.map(ev => (
            <Link  key={ev.id}  href={`/events/${ev.id}`} legacyBehavior>
            <a>
              <Image width={100} height={100} src={ev.image} />
              <h2>{ev.title}</h2>
            </a>
            </Link>
          ))}
        </div>
        </div>
    )
}

export default eventsPage;

export async function getStaticProps() {
  const {events_categories} = await import('/data/data.json');
  // console.log(events_category);
  return {
    props:{
      data: events_categories,
    },
  };
}
